#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { GaqlClient } from "./client/gaql-client.js";
// CLI token parsing
console.error("Process argv:", process.argv);
const tokenArg = process.argv.find(arg => arg.startsWith("--token="));
const token = tokenArg?.substring("--token=".length);
if (!token) {
    console.error("❌ Error: Missing --token argument.");
    process.exit(1);
}
else {
    console.error("✅ Parsed token.");
}
const gaqlClient = new GaqlClient(token);
const server = new McpServer({
    name: "Google Ads MCP",
    version: "1.0.0"
});
// Tool: get-accounts
server.tool("get-accounts", "Gets Google Ads accounts.", async () => {
    console.error("🛠 get-accounts called");
    try {
        const accounts = await gaqlClient.getAccounts();
        return {
            content: [{
                    type: "text",
                    text: `Accounts:\n${JSON.stringify(accounts, null, 2)}`
                }]
        };
    }
    catch (err) {
        console.error("❌ Error in get-accounts:", err);
        return {
            content: [{
                    type: "text",
                    text: `Failed to fetch accounts: ${err.message}`
                }]
        };
    }
});
// Tool: execute-gaql-query
server.tool("execute-gaql-query", "Executes a GAQL query and returns the result as a formatted JSON string.", {
    query: z.string().describe("GAQL query"),
    customerId: z.number().describe("Customer ID"),
    loginCustomerId: z.number().describe("Login Customer ID"),
    reportAggregation: z.string().describe("Report aggregation (for Microsoft Advertising only)")
}, async (args) => {
    console.error("🛠 execute-gaql-query called with:", args);
    try {
        const result = await gaqlClient.executeGaqlQuery(args);
        return {
            content: [{
                    type: "text",
                    text: `Query result:\n${result}`
                }]
        };
    }
    catch (err) {
        console.error("❌ Error in execute-gaql-query:", err);
        return {
            content: [{
                    type: "text",
                    text: `Failed to execute query: ${err.message}`
                }]
        };
    }
});
// Start server
async function main() {
    console.error("🚀 Connecting to MCP server...");
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("✅ MCP server is running.");
}
main().catch((err) => {
    console.error("🔥 Fatal error in main():", err);
    process.exit(1);
});
