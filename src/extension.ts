import * as vscode from "vscode";
import fs from "fs/promises";
import path from "path";
import html from "./frontend/index.html";

class DisposableManager {
  private disposables: vscode.Disposable[] = [];

  constructor(private context: vscode.ExtensionContext) {}

  register(commandIdentifier: string, cb: () => void | Promise<void>) {
    const disposable = vscode.commands.registerCommand(commandIdentifier, cb);
    this.disposables.push(disposable);
    this.context.subscriptions.push(disposable);
  }
}

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  const dm = new DisposableManager(context);

  dm.register("typescript-first-ext.helloWorld", async () => {
    const quickPickOptions = [
      { label: "article 1", detail: "some description" },
      { label: "article 2", detail: "some description" },
      { label: "article 3", detail: "some description" },
      { label: "article 4", detail: "some description" },
    ];

    const article = await vscode.window.showQuickPick(quickPickOptions, {
      matchOnDetail: true,
    });
    await vscode.window.showInformationMessage(
      `You selected: ${article?.label}`
    );
  });

  dm.register("typescript-first-ext.webview", async () => {
    const panel = vscode.window.createWebviewPanel(
      "toolbox",
      "My first webview",
      vscode.ViewColumn.One,
      {
        enableScripts: true,
      }
    );
    panel.webview.html = html;

    panel.webview.onDidReceiveMessage((message) => {
      vscode.window.showInformationMessage(`Received: ${message}`);
    });
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
