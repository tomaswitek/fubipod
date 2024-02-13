import {NextApiHandler} from "next";

const handler: NextApiHandler = (req, res) => {
  res.setPreviewData({});
  res.redirect("/");
};

export default handler;
