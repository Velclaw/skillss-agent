import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.supabase.com/mcp",
  description: "Manage databases, authentication, and storage",
  auth: connect("mcp.supabase.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
