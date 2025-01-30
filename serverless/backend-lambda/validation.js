import axios from "axios";
import querystring from "querystring"; //

const validateCaptcha = async (body, parameters) => {
  const secretKey = parameters["contactnextlevelbuilders_secret-key"];
  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  // get the ip address and token from the request headers
  let ip = body.headers?.["x-forwarded-for"]?.split(",")[0] || body.remote_addr;
  const token = body.token;

  if (!token) {
    throw new Error("Missing CAPTCHA token");
  }

  // JS requires that you manually encode the response, unlike Python's request library
  const data = querystring.stringify({
    secret: secretKey,
    response: token,
    remoteip: ip,
  });

  try {
    const response = await axios.post(url, data, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return response.data.success === true;
  } catch (error) {
    console.error("Error validating CAPTCHA:", error);
    return false;
  }
};

export default validateCaptcha;
