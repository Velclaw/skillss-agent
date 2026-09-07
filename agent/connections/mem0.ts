import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.mem0.ai/mcp",
  description: "Persistent memory for AI agents & assistants",
  auth: connect("mcp.mem0.ai/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
