from flask import Flask, render_template, request, flash
from helpers import send_email
from dotenv import load_dotenv
import os, requests, secrets

#Function loads key value pairs from the .env (non-syndicated environment file)
load_dotenv()

# Configure application
app = Flask(__name__)

# create secret key
secret_key = secrets.token_hex(16)  # Generate a 32-character hexadecimal string (16 bytes)

# Set a secret key for session management
app.secret_key = secret_key

# Define a get route for the home page of the website
@app.route("/")
def index():
    return render_template("index.html")

# Define a get route for the about page of the website
@app.route("/about")
def about():
    return render_template("about.html")

# Define a get route for the contact page of the website
# As well as define a post method for the user to contact the company via the submission form
from flask import flash

@app.route("/contact", methods=["POST", "GET"])
def contact():
    # If the user is submitting a contact form, then do the following...
    if request.method == "POST":
        
        # Assure response from Google reCaptcha
        user_response = request.form['g-recaptcha-response']
        secret_key = os.getenv('RECAPTCHA_SECRET_KEY')
        
        try:
            response = requests.post('https://www.google.com/recaptcha/api/siteverify', data={'secret': secret_key, 'response': user_response})
            result = response.json()

            if result['success']:
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
                    flash('Email sent successfully!', 'success')
                except Exception as e:
                    flash('Failed to send email. Please try again later.', 'error')

                # Redirect the user to the home page once the send_email function completes
                return render_template("index.html")
            
            else:
                flash('Error: Invalid reCaptcha response. Please try again.', 'error')
                return render_template("contact.html")
        
        except Exception as e:
            flash('Failed to verify reCAPTCHA. Please try again later.', 'error')
            return render_template("contact.html")

    # If the user hasn't submitted a contact form yet, then load the contact page
    else:
        return render_template("contact.html")
