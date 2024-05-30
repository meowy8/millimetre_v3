import { IncomingForm } from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disabling the default body parser to handle multipart data
  },
};

export const parseForm = (req, res, next) => {
  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    req.body = fields;
    req.files = files;
    next();
  });
};
