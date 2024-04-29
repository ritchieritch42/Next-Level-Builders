from flask import Flask, flash, render_template, request
from helpers import send_email, verify_human, fetch_parameters
import os

# Configure application
application = Flask(__name__)

# Set a secret key for Flask sessions
application.secret_key = os.urandom(24).hex()

# Run parameters function in helpers.py
prefix = "/contactnextlevelbuilders_"
parameters = fetch_parameters(prefix)

# Define a get route for the home page of the website
@app.route("/")
def index():
    return render_template("index.html")

# Define a get route for the about page of the website
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact", methods=["POST", "GET"])
def contact():
    # If the user is submitting a contact form, then do the following...
    if request.method == "POST":

        # Define variables from parameter variable to use in verify human reCAPTCHA test
        project_id = parameters['PROJECT_ID']
        recaptcha_key = parameters["recaptcha-public-key"]
        token = request.form.get("g-recaptcha-response")
        recaptcha_action = "contact"


        # Check if reCAPTCHA token is empty
        if not token:
            flash("Please complete the reCAPTCHA")
            return render_template("contact.html")
        
        # Check to see if reCAPTCHA was valid
        if verify_human(project_id, recaptcha_key, token, recaptcha_action, parameters):
            # Define the users receiving email, subject, and body
            subject = request.form.get("subject")
            firstname = request.form.get("firstname")
            lastname = request.form.get("lastname")
            phonenumber = request.form.get("phonenumber")
            email = request.form.get("email")
            emailbody = request.form.get("body")
            body = firstname + " " + lastname + "\n" + phonenumber + "\n" + email + "\n" + emailbody

            # Attempt to send the contact submission form details
            # Email will always be the contact email
            # Subject is subject
            # Body is firstname, lastname, phonenumber, email, and the content
            try:
                send_email(subject, body)
                return render_template("index.html")
            except:
                return render_template("sendemailfailure.html")
                                       
        else:
            flash("Invalid reCAPTCHA entry, please try again")

    # If the user hasn't submitted a contact form yet, then load the contact page
    else:
        return render_template("contact.html")
