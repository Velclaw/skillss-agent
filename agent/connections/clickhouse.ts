import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.clickhouse.cloud/mcp",
  description: "Query and explore your ClickHouse Cloud data",
  auth: connect("mcp.clickhouse.cloud/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
