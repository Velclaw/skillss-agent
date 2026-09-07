import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.zernio.com/mcp",
  description: "Social publishing, analytics, and ads across 16 platforms",
  auth: connect("mcp.zernio.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
