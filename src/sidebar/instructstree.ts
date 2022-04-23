import * as vscode from "vscode";
import { insJSON } from "../assets/instructs";

export function createInstructTree(context: vscode.ExtensionContext) {
  let provider = vscode.window.createTreeView("nexdroid-instructs", {
    treeDataProvider: treeDataProvider,
  });
  provider.onDidChangeSelection((e) => {
    // console.log(e);
  });
  context.subscriptions.push(provider);
}

const treeDataProvider = {
  getChildren: (el: any) => {
    let insArr = new Array<vscode.TreeItem>();
    if (el) {
      if (insJSON.findIndex((v) => v.type == el.label) > -1) {
        insArr = insJSON[insJSON.findIndex((v) => v.type == el.label)].ins.map(
          (v) => {
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
          }
        );
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
  },
  getTreeItem: (el: any) => {
    return el;
  },
  getParent: () => {
    return {};
  },
};
