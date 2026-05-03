"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { APIPlayground } from "@/components/api-playground";
import { APIConfig, APITestResponse, Parameter } from "@/lib/types";
export default function Dashboard() {
  const [config, setConfig] = useState<APIConfig>({
    url: "",
    method: "GET",
    headers: [],
    query: [],
    path: [],
    body: [],
  });

  const handleTest = async (config: APIConfig): Promise<APITestResponse> => {
    console.log("Testing API with config:", config);

    // Build URL + query params
    let url = config.url;
    const queryParams = new URLSearchParams();
    config.query?.forEach((p: Parameter) => {
      if (p.key && p.value) queryParams.append(p.key, p.value);
    });
    if (queryParams.toString()) url += `?${queryParams.toString()}`;

    // Build headers
    const headers: Record<string, string> = {};
    config.headers?.forEach((p) => {
      if (p.key && p.value) headers[p.key] = p.value;
    });

    // Build body
    let body: string | undefined = undefined;
    if (["POST", "PUT", "PATCH"].includes(config.method)) {
      const bodyData: Record<string, any> = {};
      config.body?.forEach((p) => {
        if (p.key) bodyData[p.key] = p.value;
      });
      body = JSON.stringify(bodyData);
      headers["Content-Type"] = headers["Content-Type"] || "application/json";
    }

    try {
      const response = await fetch(url, {
        method: config.method,
        headers,
        body: body,
        // optional: mode: 'cors' // uncomment if needed
      });

      if (!response.ok) {
        // try parse error body, fallback to status text
        let errText = response.statusText;
        try {
          const errJson = await response.json();
          errText = errJson?.error || JSON.stringify(errJson);
        } catch {}
        throw new Error(
          errText || `Request failed with status ${response.status}`,
        );
      }

      // Try JSON, fallback to text
      const contentType = response.headers.get("content-type") || "";
      const data = await response.json();
      if (contentType.includes("application/json")) {
        return {
          status: response.status,
          data,
        };
      } else {
        const text = await response.text();
        // adapt this to APITestResponse shape if needed
        return {
          status: response.status,
          body: text,
        } as unknown as APITestResponse;
      }
    } catch (error) {
      console.error("API test failed:", error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-nowrap flex-row items-center justify-between w-full mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                API Playground
              </h1>
              <p className="text-gray-600 dark:text-gray-100">
                Test and configure APIs with a clean, powerful interface
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://github.com/nparashar150/21st", "_blank")
              }
              className="flex items-center gap-2"
            >
              {/* <Github className="h-4 w-4" /> */}
              Default Code
            </Button>
          </div>

          <div className="bg-white dark:bg-neutral-950 rounded-lg shadow-sm border p-4 h-[600px]">
            <APIPlayground
              config={config}
              onTest={handleTest}
              onConfigChange={setConfig}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
