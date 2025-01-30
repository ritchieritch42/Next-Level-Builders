import * as AWS from "aws-sdk"; // Import AWS SDK
const ses = new AWS.SES({ region: "us-east-1" }); // Specify SES region

export const sendForm = async (requestBody, parameters) => {
  const { firstName, lastName, phoneNumber, email, subject, body } =
    requestBody;

  // Extract the sender and recipient emails from the parameters object
  const { senderEmail, recipientEmail } = parameters;

  // Build the email content
  const emailParams = {
    Source: senderEmail, // Set the sender's email (must be verified in SES)
    Destination: {
      ToAddresses: [recipientEmail], // Recipient's email from parameters
    },
    Message: {
      Subject: {
        Data: "New Form Submission",
        Charset: "UTF-8",
      },
      Body: {
        Text: {
          Data: `You have received a new form submission:

Name: ${name}
Email: ${email}
Message: ${message}`,
          Charset: "UTF-8",
        },
      },
    },
  };

  try {
    // Send email via SES
    const result = await ses.sendEmail(emailParams).promise();
    console.log("Email sent successfully:", result);
    return { message: "Form submitted successfully!" };
  } catch (err) {
    console.error("Error sending email:", err);
    return { error: "Failed to send email" };
  }
};
