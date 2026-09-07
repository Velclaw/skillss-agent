import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.ticktick.com",
  description: "Search, create and manage your tasks/habit it TickTick.",
  auth: connect("mcp.ticktick.com/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
