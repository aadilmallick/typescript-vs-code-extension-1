/// <reference lib="dom" />

import * as vscode from "vscode";
import { $ } from "./utils/funcs";

const messageButton = document.getElementById(
  "send-message"
)! as HTMLButtonElement;
messageButton.addEventListener("click", () => {
  console.log("is anything happening?");
  messageButton.textContent = "Clicked!";
  vscode.window.showInformationMessage("Hello from webview!");
});
