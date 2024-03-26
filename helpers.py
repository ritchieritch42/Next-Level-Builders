from email.message import EmailMessage
from google.cloud import recaptchaenterprise_v1
from google.cloud.recaptchaenterprise_v1 import Assessment
import os, ssl, smtplib

#Define the send mail function to use in our app routes in app.py
def send_email(subject, body):

    #Use the operating system function getenv to get the email and password for the contactnextlevelbuilders gmail account
    sender_email = os.getenv("EMAIL")
    receiver_email = os.getenv("EMAIL")
    sender_email_password = os.getenv("EMAIL_PASSWORD")

    #From the email.message module, use the emailmessage class to specify a sender, receiver, subject, and body
    em = EmailMessage()
    em["From"] = sender_email
    em["To"] = receiver_email
    em["Subject"] = subject

    #Use the set_content function of the emailmessage class to set the body of the email
    em.set_content(body)

    #Create a secure, networking context variable to use in our email transfer
    context = ssl.create_default_context()

    #Use the simple mail transfer protocol (smtp) library from Python
    #Smtp secure sockets layer (ssl) requires three things
        # An email domain/host name
        # A port number, which defines the unique end point and service for the computer attempting to network
        # An ssl context
    #SSL is actually Transport Layer Security, the successor of SSL, in Python's SMTP Library
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(sender_email, sender_email_password)
        smtp.sendmail(sender_email, receiver_email, em.as_string())
