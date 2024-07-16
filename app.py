from flask import Flask, render_template, request
from helpers import send_email, fetch_parameters
import os

# Configure application
application = Flask(__name__)

# Set a secret key for Flask sessions
application.secret_key = os.urandom(24).hex()

# Define a get route for the home page of the website
@application.route("/")
def index():
    return render_template("index.html")

# Define a get route for the about page of the website
@application.route("/about")
def about():
    return render_template("about.html")

@application.route("/contact", methods=["POST", "GET"])
def contact():
    # If the user is submitting a contact form, then do the following...
    if request.method == "POST":

        # Get parameters from helpers.py
        prefix = 'contactnextlevelbuilders_'
        parameters = fetch_parameters(prefix)
        
        try: 
            # Proceed with sending form content
            subject = request.form.get("subject")
            firstname = request.form.get("firstname")
            lastname = request.form.get("lastname")
            phonenumber = request.form.get("phonenumber")
            email = request.form.get("email")
            emailbody = request.form.get("body")
            body = firstname + " " + lastname + "\n" + phonenumber + "\n" + email + "\n" + emailbody

            # Attempt to send the contact submission form data
            # Email will always be the contact email
            # Subject is subject
            # Body is firstname, lastname, phonenumber, email, and the content
            send_email(subject, body, parameters)
            return render_template("emailsuccess.html")
        except:
            return render_template("sendemailfailure.html")

    # If the user hasn't submitted a contact form yet, then load the contact page
    else:
        return render_template("contact.html")

@application.route("/emailsuccess")
def emailsucess():
    return render_template("emailsuccess.html")


if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()