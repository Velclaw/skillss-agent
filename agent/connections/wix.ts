import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.wix.com/mcp",
  description: "Manage and build sites and apps on Wix",
  auth: connect("mcp.wix.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
