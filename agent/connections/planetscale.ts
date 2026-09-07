import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.pscale.dev/mcp/planetscale",
  description: "Authenticated access to your Postgres and MySQL DB's",
  auth: connect("mcp.pscale.dev/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
