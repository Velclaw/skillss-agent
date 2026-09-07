import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.zapier.com/api/v1/connect",
  description: "Automate workflows across thousands of apps via conversation",
  auth: connect("mcp.zapier.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
