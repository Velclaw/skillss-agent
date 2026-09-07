import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.candid.org/mcp",
  description: "Research nonprofits and funders using Candid's data",
  auth: connect("mcp.candid.org/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
