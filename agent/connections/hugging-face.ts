import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://huggingface.co/mcp?login&gradio=none",
  description: "Access the Hugging Face Hub and thousands of Gradio Apps",
  auth: connect("huggingface.co/prj_3yUsFBlhw8Rcelmi643M23zDeEtv"),
});
