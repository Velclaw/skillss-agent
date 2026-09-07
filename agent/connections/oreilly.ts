import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.oreilly.com/api/content-discovery/v1/mcp/",
  description: "Discover O'Reilly's expert learning content",
  auth: connect("api.oreilly.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
