import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.make.com",
  description: "Run Make scenarios and manage your Make account",
  auth: connect("mcp.make.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
