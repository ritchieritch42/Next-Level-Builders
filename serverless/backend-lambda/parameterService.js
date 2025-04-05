import pkg from "aws-sdk"; // Import the entire aws-sdk package as the default export
const { SSM } = pkg; // Destructure the SSM class from the package

const fetchParameters = async (prefix) => {
  // Establish a connection with AWS Parameter Store in the appropriate region
  const ssm = new SSM({ region: "us-east-2" });

  try {
    // Fetch parameters from AWS Parameter Store
    const response = await ssm
      .getParameters({
        Names: [
          `${prefix}email`,
          `${prefix}receiver-email`,
          `${prefix}password`,
        ],
        WithDecryption: true,
      })
      .promise();

    // Create parameters object
    let parameters = {};

    // Iterate through response and assign parameters key/value pairs
    for (const param of response.Parameters) {
      parameters[param.Name] = param.Value;
    }

    return parameters;
  } catch (error) {
    console.error("Error fetching parameters:", error);
    throw error;
  }
};

export default fetchParameters;
