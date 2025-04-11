// src/client/gaql-client.ts

const API_BASE = "https://api.gaql.app";
const USER_AGENT = "qaql-tool-client/1.0";

export interface GaqlQueryRequest {
    query: string;
    customerId: number;
    loginCustomerId: number;
    reportAggregation: string;
}

export class GaqlClient {
    private token: string;

    constructor(token: string) {
        if (!token) {
            throw new Error("GAQL token is required");
        }

        this.token = token;
    }

    async getAccounts(): Promise<any> {
        const url = `${API_BASE}/api/gpt/google-ads/get-accounts?gptToken=${this.token}`;
        
        const response = await fetch(url, {
            headers: {
                "User-Agent": USER_AGENT
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`GAQL error ${response.status}: ${errorText}`);
        }

        return response.json();
    }

    async executeGaqlQuery(query: GaqlQueryRequest): Promise<string> {
        const url = `${API_BASE}/api/gpt/google-ads/execute-query?gptToken=${this.token}`;
        
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": USER_AGENT
            },
            body: JSON.stringify(query)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`GAQL error ${response.status}: ${errorText}`);
        }

        const json = await response.json();
        return JSON.stringify(json, null, 2); // pretty print
    }
}
