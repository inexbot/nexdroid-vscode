import * as vscode from "vscode";
import fs = require("fs-extra");
import request = require("request");
import path = require("path");
import zip = require("adm-zip");
let workPath = "";
let parserPath = "";
let jobparserPath = "";
let outputChannel = vscode.window.createOutputChannel("nexdroid");
let editor: vscode.TextEditor | undefined = undefined;

export function registerParse(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("nexdroid.parse", () => {
    if (vscode.env.appHost != "desktop") {
      vscode.window.showErrorMessage("解析文件功能目前仅支持pc平台！");
      return;
    }
    outputChannel.hide();
    editor = vscode.window.activeTextEditor;
    if (editor?.document.languageId != "JBR") {
      vscode.window.showErrorMessage(
        "解析文件功能仅支持NexDroid平台的JBR、JBP文件！"
      );
      return;
    }
    outputChannel.appendLine(`开始解析文件...`);
    outputChannel.show();
    workPath = context.globalStorageUri.fsPath;
    parserPath = path.join(workPath, "/jobparser/jobparser.exe");
    jobparserPath = path.join(workPath, "/jobparser");
    getVersion((version: string) => {
      if (version == "offline") {
        if (fs.existsSync(parserPath)) {
          outputChannel.appendLine(
            "无法联网检查版本，检测到当前主机已有解析器，将使用现有解析器进行解析..."
          );
          parseJobFile();
        } else {
          outputChannel.appendLine(
            "无法联网检查版本，并且此设备未能找到解析器，请联网重试。"
          );
          return;
        }
      } else if (
        version != context.globalState.get("parserVersion") ||
        !fs.existsSync(parserPath)
      ) {
        outputChannel.appendLine(`下载最新版本的解析器...`);
        getExec(
          "https://inexbot-use.oss-cn-shanghai.aliyuncs.com/vscode/release.zip",
          function (path: string) {
            if (path == "none") {
              vscode.window.showErrorMessage("解析器下载失败，请重试。");
              outputChannel.appendLine(`解析器下载失败，请重试。`);
            } else {
              outputChannel.appendLine(`解析器下载完成，最新版本为${version}`);
              context.globalState.update("parserVersion", version);
              parseJobFile();
            }
          }
        );
      } else {
        parseJobFile();
      }
    });
  });
  context.subscriptions.push(disposable);
}

function getExec(remoteUri: string, callback: Function) {
  try {
    fs.ensureDirSync(workPath);
    request.get("", function (err, res, body) {
      if (!err) {
      }
    });
    request(
      { url: remoteUri, method: "GET", encoding: null },
      (err: any, res: request.Response, body: any) => {
        let jobparserZipPath = workPath + path.join("/jobparser.zip");
        fs.writeFileSync(jobparserZipPath, body, { encoding: "binary" });
        let zipFile = new zip(jobparserZipPath);
        zipFile.extractAllTo(jobparserPath, true);
        callback("ok");
      }
    );
  } catch {
    callback("none");
  }
}

function getVersion(callback: Function) {
  request.get(
    "https://inexbot-use.oss-cn-shanghai.aliyuncs.com/vscode/parser.json",
    (err, res, body) => {
      if (err) {
        callback("offline");
        return;
      }
      let jsonReviver = JSON.parse(body);
      let version = jsonReviver["parser.version"];
      callback(version);
    }
  );
}
function parseJobFile() {
  if (editor == undefined) {
    outputChannel.appendLine(`请打开文件!`);
    return "noActiveEditor";
  }
  if (editor.document.isUntitled) {
    vscode.window.showErrorMessage("请保存文件后再进行解析！");
    outputChannel.appendLine(`请保存文件后再进行解析!`);
    return "untitled";
  }
  const activeFilePath = editor.document.fileName;
  var exec = require("child_process").exec,
    child;
  child = exec(
    parserPath + " " + activeFilePath,
    function (err: any, stdout: any, stderr: string) {
      console.log("stdout", stdout);
      console.log("stderr", stderr);
      console.log(parserPath + " " + activeFilePath);
      if (editor == undefined) {
        return;
      }
      if (stderr.indexOf("$") > 0) {
        let numStr = stderr.slice(
          stderr.indexOf("$") + 1,
          stderr.lastIndexOf("$")
        );
        let num = Number(numStr);
        outputChannel.appendLine(`解析完成，第${numStr}行有错误!`);
        let line = editor.document.lineAt(num - 1);
        let start = line?.range.start.character;
        let end = line?.range.end.character;
        let range: vscode.Range = new vscode.Range(
          new vscode.Position(num - 1, start),
          new vscode.Position(num - 1, end)
        );
        vscode.window.showTextDocument(editor.document, {
          preserveFocus: false,
          selection: range,
          viewColumn: vscode.ViewColumn.One,
        });
      } else {
        outputChannel.appendLine(`解析完成，未检查到错误。`);
      }
    }
  );
}
