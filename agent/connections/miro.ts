import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.miro.com/",
  description: "Access and create new content on Miro boards",
  auth: connect("mcp.miro.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
