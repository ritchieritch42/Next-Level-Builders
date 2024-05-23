# For send_email
import smtplib, boto3, logging, requests, os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

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
        prefix + 'google-project-id',
        prefix + 'google-api-key'
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

    sender_email = parameters['contactnextlevelbuilders_email']
    receiver_email = parameters['contactnextlevelbuilders_receiver-email']
    password = parameters['contactnextlevelbuilders_password']

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

def verify_recaptcha(token, parameters):
    # Perform reCAPTCHA verification using the provided token
    verification_url = "https://www.google.com/recaptcha/api/siteverify"
    siteKey = parameters['contactnextlevelbuilders_google-api-key']
    response = requests.post(
        verification_url, 
        data={
            'secret': siteKey,  # Your secret key
            'response': token   # The token from the client
        }
    )

    # Check if the request was successful and if the reCAPTCHA verification succeeded
    if response.status_code == 200 and response.json().get('success'):
        return True
    else:
        return False