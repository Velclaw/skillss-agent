import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.tickettailor.ai/mcp",
  description: "Event platform for managing tickets, orders & more",
  auth: connect("mcp.tickettailor.ai/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
