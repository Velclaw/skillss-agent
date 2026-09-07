import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.localfalcon.com",
  description: "AI visibility and local search intelligence platform",
  auth: connect("mcp.localfalcon.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
