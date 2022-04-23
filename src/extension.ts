import * as vscode from "vscode";
import { registerHover } from "./hover";
import { insertInstruct } from "./insert";
import { registerParse } from "./parse";
import {createInstructTree} from "./sidebar/instructstree"
export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage("NexDroid扩展打开成功！");
  registerHover(context);
  registerParse(context);
  createInstructTree(context);
  insertInstruct(context);
}

export function deactivate() {}
