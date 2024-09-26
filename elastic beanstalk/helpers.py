# For send_email
import smtplib, boto3
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import requests

def fetch_parameters(prefix):
    # Establish a connection with AWS Parameter Store in the appropriate region
    client = boto3.client('ssm', region_name='us-east-2')

    # After establishing the connection, get the parameters needed
    response = client.get_parameters(
        Names=[
        prefix + 'email',
        prefix + 'receiver-email',
        prefix + 'password',
        prefix + 'secret-key'
        ],
        WithDecryption=True
    )

    # Create parameters object
    parameters = {}

    # Define length ahead of time so that Python doesn't have to recalculate it for every iteration in for loop
    length_params = len(response['Parameters'])

    # Iterate through response and assign parameters key/value pairs
    for i in range(length_params):
        parameters[response['Parameters'][i]['Name']] = response['Parameters'][i]['Value']

    return parameters

def validate_captcha(parameters):
    body = request.formData()

    secret_key = parameters["contactnextlevelbuilders_secret-key"]
    url = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

    if request.headers.getlist("X-Forwarded-For"):
        ip = request.headers.getlist("X-Forwarded-For")[0]
    else:
        ip = request.remote_addr

    data = {
        'secret': secret_key,
        'response': token,
        'remoteip': ip
    }

    try:
        response = requests.post(url, data=data)
        result = response.json()

        if result.get("success"):
            return True
        else:
            return False
    
    except requests.RequestException as e:
        print(f"Error verifying CAPTCHA: {e}")
        return False

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