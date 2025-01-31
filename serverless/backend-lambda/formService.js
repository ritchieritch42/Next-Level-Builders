// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const sendForm = async (requestBody, parameters) => {
  try {
    const { firstName, lastName, email, phoneNumber, subject, body } =
      requestBody;
    const sourceEmail = "no-reply@nextlevelbuildersllc.com";

    // Create SES sendEmail parameters
    const params = {
      Destination: {
        ToAddresses: [parameters["contactnextlevelbuilders_receiver-email"]],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
              <p><strong>First Name:</strong> ${firstName}</p>
              <p><strong>Last Name:</strong> ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone Number:</strong> ${phoneNumber}</p>
              <p><strong>Message:</strong> ${body}</p>
              <p style="color:gray; font-size:12px;">This is an automated email from Next Level Builders. Please do not reply.</p>
            `,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject,
        },
      },
      Source: sourceEmail,
      ReplyToAddresses: [],
    };

    // Send email using AWS SES
    const ses = new AWS.SES({ apiVersion: "2010-12-01" });
    const response = await ses.sendEmail(params).promise();

    console.log("Email sent successfully:", response.MessageId);
    alert("Email sent successfully!");
    return response;
  } catch (error) {
    console.error("Error sending email:", error.message);
    alert("Email not sent, error occured.");
    throw error;
  }
};

export default sendForm;
