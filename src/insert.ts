import * as vscode from "vscode";

export default vscode.commands.registerTextEditorCommand(
  "nexdroid.insertIns",
  async (
    TextEditor: vscode.TextEditor,
    edit: vscode.TextEditorEdit,
    ins: string | Array<string>
  ) => {
    let whiteLine = TextEditor.document.lineAt(
      TextEditor.selection.start.line
    ).isEmptyOrWhitespace;
    let startLine = TextEditor.selection.start.line;
    let endCharacter =
      TextEditor.document.lineAt(startLine).range.end.character;
    if (!whiteLine) {
      await TextEditor.insertSnippet(
        new vscode.SnippetString("\r\n"),
        new vscode.Position(startLine, endCharacter)
      );
    }
    if (typeof ins == "object") {
      let arr = new Array<vscode.SnippetString>();
      arr = ins.map((v) => new vscode.SnippetString(v));
      for (let i = 0; i < arr.length; i++) {
        if (whiteLine) {
          await TextEditor.insertSnippet(
            arr[i],
            new vscode.Position(startLine + i, 0)
          );
          if (i == arr.length - 1) {
            break;
          }
          await TextEditor.insertSnippet(
            new vscode.SnippetString("\r\n"),
            new vscode.Position(
              startLine + i,
              TextEditor.document.lineAt(startLine + i).range.end.character
            )
          );
        } else {
          if (i > 0) {
            await TextEditor.insertSnippet(
              new vscode.SnippetString("\r\n"),
              new vscode.Position(
                startLine + i,
                TextEditor.document.lineAt(startLine + i).range.end.character
              )
            );
          }
          await TextEditor.insertSnippet(
            arr[i],
            new vscode.Position(startLine + i + 1, 0)
          );
        }
      }
    } else if (typeof ins == "string") {
      if (!whiteLine) {
        await TextEditor.insertSnippet(
          new vscode.SnippetString(ins),
          new vscode.Position(startLine + 1, 0)
        );
      } else {
        await TextEditor.insertSnippet(
          new vscode.SnippetString(ins),
          new vscode.Position(startLine, 0)
        );
      }
    }
  }
);
