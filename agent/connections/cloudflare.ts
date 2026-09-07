import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.cloudflare.com/mcp",
  description: "Build applications with compute, storage, and AI",
  auth: connect("mcp.cloudflare.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
