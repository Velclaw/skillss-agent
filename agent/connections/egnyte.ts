import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp-server.egnyte.com/mcp",
  description: "Securely access and analyze Egnyte content",
  auth: connect("mcp-server.egnyte.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
