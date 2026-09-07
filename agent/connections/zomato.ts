import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp-server.zomato.com/mcp",
  description: "Fast & easy online food ordering and delivery service",
  auth: connect("mcp-server.zomato.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
