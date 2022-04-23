import * as vscode from "vscode";
import registerHover from "./hover";
import insertInstruct from "./insert";
import newJobFile from "./newfile";
import { registerParse } from "./parse";
import {nexDroidTreeView} from "./sidebar/nexdroidtree";
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(registerHover);
  registerParse(context);
  nexDroidTreeView(context);
  context.subscriptions.push(insertInstruct);
  context.subscriptions.push(newJobFile);
}

export function deactivate() {}
