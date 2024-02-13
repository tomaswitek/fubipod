// simple example for testing it manually from your browser.
import {NextApiHandler} from "next";

const handler: NextApiHandler = (req, res) => {
  res.setPreviewData({});
  res.end("Preview mode enabled");
};

export default handler;
