import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.beehiiv.com/mcp",
  description: "Newsletter publishing, subscriptions, and automations",
  auth: connect("mcp.beehiiv.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
