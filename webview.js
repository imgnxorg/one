// In your extension's main file

const vscode = require("vscode");

function activate(context) {
  // Create a new webview panel

  const panel = vscode.window.createWebviewPanel(
    "imgnxOne", // View type ID

    "Imgnxtion One", // Title

    vscode.ViewColumn.Beside, // Where to place the panel

    {
      enableScripts: true, // Allow JavaScript execution in the panel
    },
  );

  // Load custom HTML into the panel

  panel.webview.html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Panel</title>
        </head>
        <body>
            <p>Hello from the panel!</p>
        </body>
      </html>
    `;
}

module.exports = {
  activate,
};
