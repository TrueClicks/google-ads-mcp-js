
# Google Ads MCP (Node.js) - by TrueClicks

Google Ads MCP by TrueClicks enables your AI (like Claude) to securely access and query your Google Ads account data. It supports both Windows and macOS, including Intel and ARM-based systems. It connects AIs to Google Ads using [GAQL.app] as a backend.

This is an *unofficial* Google Ads MCP integration - and as of now, **no official version exists**.

---

## ✅ Why Use This MCP?

Unlike other open-source Multi-Client Processors (MCPs) for Google Ads, this Node.js-based MCP offers **the easiest setup experience available**:

- 🟢 **No Google Cloud Project setup required**
- 🟢 No OAuth credentials
- 🟢 No Developer Tokens
- 🟢 No Client IDs
- 🟢 No authentication hassles

Instead, it uses free **[GAQL.app](https://gaql.app)**, which securely handles authentication and query execution behind the scenes.

This makes it ideal for users who want to get up and running **within minutes**.

---

## 🛠️ Setup Guide

### 1. Install Node.js

Ensure you have Node.js installed on your system.

- On Windows, open **Command Prompt** (search for "cmd" in the Start menu) and run:

```sh
winget install nodejs
```

- On macOS, download and install Node.js from [https://nodejs.org](https://nodejs.org).

### 2. Get Your GPT Token

1. Go to [https://gaql.app](https://gaql.app)
2. Log in using your Google account to authorize Google Ads access.
3. Click the **Copy GPT Token** button in the top-right corner.

### 3. Configure Your AI (Claude)

The application is configured via a JSON file named `claude_desktop_config.json`.

1. Open the **Claude** desktop application.

2. Press:

   - `CTRL + ,` (Control key and comma) on Windows/Linux
   - `Command + ,` (Command key and comma) on macOS

3. In the left sidebar, click **Developer**.

4. Open  **Edit config** and open `claude_desktop_config.json` for editing.

5. Paste the following JSON into your configuration file:

   ```json
   {
     "mcpServers": {
       "gads": {
         "command": "npx",
         "args": [
           "-y",
           "@trueclicks/google-ads-mcp-js",
           "--token=YOUR_GPT_TOKEN_HERE"
         ]
       }
     }
   }
   ```

   > **Important:** Replace `YOUR_GPT_TOKEN_HERE` with the token copied from GAQL.app.

6. Exit Claude completely:

   - On Windows/Linux: **Hamburger menu > File > Exit**
   - On macOS: Right-click the Claude icon in the top-right panel and click **Quit**

7. Restart Claude.

You’re now ready to use Claude AI to query your Google Ads accounts.

---

## 💬 Example Prompts

- `List my Google Ads accounts`
- `What is the cost for account XYZ in the past 30 days?`
- `What are the top 5 setting recommendations for my campaigns?`

---

## 🆚 Comparison with Other Google Ads MCPs

| Feature                    | Google Ads MCP (Node.js) | Other MCPs (Python/etc.)  |
| -------------------------- | ------------------------ | ------------------------- |
| Google Cloud project setup | 🟢 No                    | 🔧 Yes                    |
| OAuth Client ID required   | 🟢 No                    | 🔧 Yes                    |
| Developer Token needed     | 🟢 No                    | 🔧 Yes                    |
| Google Ads API familiarity | 🟢 No                    | ⚠️ Yes                    |
| Setup complexity           | 🎉 Very low              | 🟠 Moderate to high       |
| Backend service            | ☁️ Hosted via GAQL.app   | 🔧 Direct API integration |

---

## 📸 Setup Screenshots (macOS)

1. **Node.js download:** Screenshot of downloading Node.js from the official site.
![Node.js download](https://github.com/TrueClicks/google-ads-mcp-js/blob/main/assets/images/osx-1.png)

2. **Claude Developer section:** Screenshot of accessing the Developer section in Claude.
![Claude developer section](https://github.com/TrueClicks/google-ads-mcp-js/blob/main/assets/images/osx-2.png)

3. **Open configuration file for editing:** Screenshot showing how to open `claude_desktop_config.json`.
![Claude config file](https://github.com/TrueClicks/google-ads-mcp-js/blob/main/assets/images/osx-3.png)

4. **Editing configuration JSON:** Screenshot of the JSON configuration being edited.
![Content in claude_desktop_config.json](https://github.com/TrueClicks/google-ads-mcp-js/blob/main/assets/images/osx-4.png)

5. **Restarting Claude:** Screenshot showing how to quit and restart Claude from the top-right corner.
![How to hard restart Claude](https://github.com/TrueClicks/google-ads-mcp-js/blob/main/assets/images/osx-5.png)

6. **Example prompt:** Screenshot showing an example prompt using Claude with Google Ads integration.
![Example prompting Google Ads with Claude](https://github.com/TrueClicks/google-ads-mcp-js/blob/main/assets/images/osx-6.png)

---

For issues or questions, please contact [ales@trueclicks.com](mailto:ales@trueclicks.com).

---
