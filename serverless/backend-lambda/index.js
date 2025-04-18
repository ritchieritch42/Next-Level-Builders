import fetchParameters from "./parameterService.js";
import validation from "./validation.js";
import sendForm from "./formService.js";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const handler = async (event) => {
  console.log("EVENT:", event);
  const parameters = await fetchParameters();
  const body =
    typeof event.body === "string" ? JSON.parse(event.body) : event.body;
  const validate = await validation(body, parameters);

  if (!validate) {
    console.error("Error fetching parameters:", error);
    throw error;
  }

  const path = event.path;
  const httpMethod = event.httpMethod;
  let response;

  if (path === "/Contact") {
    // Attempt to send form contents
    if (httpMethod === "POST") {
      response = await sendForm(body, parameters);
    }
  }

  if (response === undefined) {
    throw new Error(`No response`);
  }

  return {
    headers,
    statusCode: 200,
    body: typeof response === "string" ? response : JSON.stringify(response),
  };
};
