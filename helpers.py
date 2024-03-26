import smtplib, os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email(subject, body):
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = os.getenv("SENDER_EMAIL")
    receiver_email = os.getenv("RECEIVER_EMAIL")
    password = os.getenv("PASSWORD")

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