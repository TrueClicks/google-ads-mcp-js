# Google Ads MCP (Node.js)

This is the Node.js version of the [TrueClicks](https://www.trueclicks.com) tool for accessing the Google Ads API via GAQL using [Model Context Protocol (MCP)](https://modelcontextprotocol.io).

It exposes the following tools:

- `get-accounts`: Lists all accessible Google Ads accounts.
- `execute-gaql-query`: Executes a GAQL query and returns the result as a formatted JSON string.

> For the .NET version of this tool, see [google-ads-mcp-dotnet](https://github.com/TrueClicks/google-ads-mcp-dotnet).

---

## Requirements

- [Node.js](https://nodejs.org/) installed

No build step is required — the repository already includes the compiled output.

---

## Claude Configuration

To use this tool in [Claude](https://www.anthropic.com/index/introducing-model-context), add the following to your configuration:

```json
{
    "mcpServers": {
        "gads": {
            "command": "npx",
            "args": [
                "-y",
                "@trueclicks/google-ads-mcp-js",
                "--token=YOUR_BASE64_ENCODED_TOKEN"
            ]
        }
    }
}
