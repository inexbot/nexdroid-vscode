import * as vscode from "vscode";

export default vscode.languages.registerHoverProvider("JBR", {
  provideHover(document, position, token) {
    let range = document.getWordRangeAtPosition(position);
    let word = document.getText(range);
    let json = require("../snippets/nexdroid.json");
    let jbrdefine = json[".source.JBR"];
    if (jbrdefine[word]) {
      return new vscode.Hover(jbrdefine[word]["description"]);
    } else if (word.match(/^[PSRE][0-9]{3}/)) {
      return new vscode.Hover(`局部位置变量`);
    } else if (word.match(/^[G][PSRE][0-9]{3}/)) {
      return new vscode.Hover(`全局位置变量`);
    } else if (word.match(/^[IBD][0-9]{3}/)) {
      return new vscode.Hover(`局部数值变量`);
    } else if (word.match(/^[G][IBD][0-9]{3}/)) {
      return new vscode.Hover(`全局数值变量`);
    }
  },
});
