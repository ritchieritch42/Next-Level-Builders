const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const handler = async (event) => {
  const body =
    typeof event.body === "string" ? JSON.parse(event.body) : event.body;
  // define path string to check for product_id in updateProduct
  const path = event.path;
  const httpMethod = event.httpMethod;
  let response;

  if (path === "/Contact") {
    // Attempt to send form contents
    if (httpMethod === "POST") {
      response = await formService.sendForm(body);
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
