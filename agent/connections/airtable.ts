import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.airtable.com/mcp",
  description: "Airtable bases, tables, and records",
  auth: connect("mcp.airtable.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
