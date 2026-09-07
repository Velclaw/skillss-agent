import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://tellme.embat.io/mcp",
  description: "Ask Embat about cash, debt, payments, and accounting",
  auth: connect("tellme.embat.io/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
