import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.mixpanel.com/mcp",
  description: "Analyze, query, and manage your Mixpanel data",
  auth: connect("mcp.mixpanel.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
