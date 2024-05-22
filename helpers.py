# For send_email
import smtplib, boto3, json
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# For create_assessment
from google.cloud import recaptchaenterprise_v1
from google.cloud.recaptchaenterprise_v1 import Assessment

def fetch_parameters(prefix):
    client = boto3.client('ssm', region_name='us-east-2')
    response = client.get_parameters(
        Names=[
        prefix + 'email',
        prefix + 'receiver-email',
        prefix + 'password',
        prefix + 'recaptcha-public-key',
        prefix + 'recaptcha-private-key',
        prefix + 'google-application-credentials',
        prefix + 'google-project-id'
        ],
        WithDecryption=True
    )

    parameters = {}
    length_params = len(response['Parameters'])

    for i in range(length_params):
        parameters[response['Parameters'][i]['Name']] = response['Parameters'][i]['Value']
    return parameters

def send_email(subject, body, parameters):
    # Define server variables
    smtp_server = "smtp.gmail.com"
    smtp_port = 587

    sender_email = parameters['email']
    receiver_email = parameters['receiver-email']
    password = parameters['password']

    # Define message contents
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject

    # Attach the body of the email to the message
    message.attach(MIMEText(body, 'plain'))

    # Start the SMTP session
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(sender_email, password)

    # Send the email
    server.sendmail(sender_email, receiver_email, message.as_string())

    # Close the SMTP session
    server.quit()

def verify_human(project_id: str, recaptcha_key: str, token: str, recaptcha_action: str, parameters) -> bool:    
    GOOGLE_APPLICATION_CREDENTIALS = parameters['google-application-credentials']
    PROJECT_ID = parameters['google-project-id']
    RECAPTCHA_PRIVATE_KEY = parameters['recaptcha-private-key']
    RECAPTCHA_PUBLIC_KEY = parameters['recaptcha-public-key']
    
    client = recaptchaenterprise_v1.RecaptchaEnterpriseServiceClient()

    # Set the properties of the event to be tracked.
    event = recaptchaenterprise_v1.Event()
    event.site_key = recaptcha_key
    event.token = token

    assessment = recaptchaenterprise_v1.Assessment()
    assessment.event = event

    project_name = f"projects/{project_id}"

    # Build the assessment request.
    request = recaptchaenterprise_v1.CreateAssessmentRequest()
    request.assessment = assessment
    request.parent = project_name

    response = client.create_assessment(request)

    # Check if the token is valid.
    if not response.token_properties.valid:
        print(
            "The CreateAssessment call failed because the token was "
            + "invalid for the following reasons: "
            + str(response.token_properties.invalid_reason)
        )
        return False

    # Check if the expected action was executed.
    if response.token_properties.action != recaptcha_action:
        print(
            "The action attribute in your reCAPTCHA tag does"
            + "not match the action you are expecting to score"
        )
        return False

    # Get the risk score and check if it indicates a human.
    # You can adjust the threshold based on your requirements.
    if response.risk_analysis.score >= 0.5:
        return True
    else:
        return False