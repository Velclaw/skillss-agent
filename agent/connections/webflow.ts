import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.webflow.com/mcp",
  description: "Manage Webflow CMS, pages, assets and sites",
  auth: connect("mcp.webflow.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
