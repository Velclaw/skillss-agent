import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://netlify-mcp.netlify.app/mcp",
  description: "Create, deploy, manage, and secure websites on Netlify.",
  auth: connect("netlify-mcp.netlify.app/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
