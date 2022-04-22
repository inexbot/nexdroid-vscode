import * as vscode from "vscode";
import { registerHover } from "./hover";
import { registerParse } from "./parse";
export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage("NexDroid扩展打开成功！");
  registerHover(context);
  registerParse(context);
}

export function deactivate() {}
