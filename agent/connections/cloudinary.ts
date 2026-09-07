import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://asset-management.mcp.cloudinary.com/sse",
  description: "Manage, transform and deliver your images & videos",
  auth: connect("asset-management.mcp.cloudinary.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
