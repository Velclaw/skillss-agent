import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.postman.com/minimal",
  description: "Give API context to your coding agents",
  auth: connect("mcp.postman.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
