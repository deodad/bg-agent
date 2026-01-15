import { createOpencodeServer } from "@opencode-ai/sdk";

const controller = new AbortController();

process.on("SIGTERM", () => controller.abort());
process.on("SIGINT", () => controller.abort());

const server = await createOpencodeServer({
	hostname: "0.0.0.0",
	port: 4096,
	signal: controller.signal,
});

console.log(`opencode server running at ${server.url}`);
