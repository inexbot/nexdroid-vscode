import * as vscode from "vscode";
import { insJSON } from "../assets/instructs";

class instructTreeDataProvider
  implements vscode.TreeDataProvider<vscode.TreeItem | vscode.TreeItem[]>
{
  private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | null> =
    new vscode.EventEmitter<vscode.TreeItem | null>();
  readonly onDidChangeTreeData?:
    | vscode.Event<vscode.TreeItem | vscode.TreeItem[] | null>
    | undefined = this._onDidChangeTreeData.event;
  getChildren(element?: vscode.TreeItem): Array<vscode.TreeItem> | null {
    if (vscode.window.activeTextEditor?.document.languageId != "JBR") {
      return null;
    }
    let insArr = new Array<vscode.TreeItem>();
    if (element) {
      if (insJSON.findIndex((v) => v.type == element.label) > -1) {
        insArr = insJSON[
          insJSON.findIndex((v) => v.type == element.label)
        ].ins.map((v) => {
          let it = new vscode.TreeItem(
            `${v.name}-${v.cn}`,
            vscode.TreeItemCollapsibleState.None
          );
          it.command = {
            title: "插入",
            command: "nexdroid.insertIns",
            arguments: [v.inst],
          };
          return it;
        });
      }
      return insArr;
    } else {
      let insTypeArr = new Array<vscode.TreeItem>();
      for (let i = 0; i < insJSON.length; i++) {
        insTypeArr.push(
          new vscode.TreeItem(
            insJSON[i].type,
            vscode.TreeItemCollapsibleState.Collapsed
          )
        );
      }
      return insTypeArr;
    }
  }
  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }
  refresh() {
    this._onDidChangeTreeData.fire(null);
  }
}

class commandsTreeDataProvider
  implements vscode.TreeDataProvider<vscode.TreeItem>
{
  private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | null> =
    new vscode.EventEmitter<vscode.TreeItem | null>();
  readonly onDidChangeTreeData?:
    | vscode.Event<vscode.TreeItem | vscode.TreeItem[] | null>
    | undefined = this._onDidChangeTreeData.event;

  getChildren(element?: vscode.TreeItem): Array<vscode.TreeItem> | null {
    if (vscode.window.activeTextEditor?.document.languageId != "JBR") {
      return null;
    }
    let insTypeArr = new Array<vscode.TreeItem>();
    let parseItem = new vscode.TreeItem(
      "解析文件",
      vscode.TreeItemCollapsibleState.None
    );
    let newFileItem = new vscode.TreeItem(
      "新建作业程序",
      vscode.TreeItemCollapsibleState.None
    );
    parseItem.command = {
      title: "解析文件",
      command: "nexdroid.parse",
      tooltip: "解析当前已保存的文件",
    };
    newFileItem.command = {
      title: "新建作业程序",
      command: "nexdroid.newFile",
      tooltip: "利用模板新建一个NexDroid系统的作业程序",
    };
    insTypeArr.push(parseItem);
    insTypeArr.push(newFileItem);
    return insTypeArr;
  }
  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }
  refresh() {
    this._onDidChangeTreeData.fire(null);
  }
}

export function nexDroidTreeView(context: vscode.ExtensionContext) {
  let commandsProvider = new commandsTreeDataProvider();
  let instructsProvider = new instructTreeDataProvider();
  let instructTreeView = vscode.window.createTreeView("nexdroid-instructs", {
    treeDataProvider: instructsProvider,
  });
  let commandTreeView = vscode.window.createTreeView("nexdroid-commands", {
    treeDataProvider: commandsProvider,
  });
  vscode.window.onDidChangeActiveTextEditor(() => {
    commandsProvider.refresh();
    instructsProvider.refresh();
  });
  context.subscriptions.push(instructTreeView);
  context.subscriptions.push(commandTreeView);
}
