import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.atlassian.com/v1/mcp/authv2",
  description: "Track issues, sprints, and workflows.",
  auth: connect("mcp.atlassian.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
