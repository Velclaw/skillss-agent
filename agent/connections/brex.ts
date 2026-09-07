import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.brex.com/mcp",
  description: "Intelligent finance automation",
  auth: connect("api.brex.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
