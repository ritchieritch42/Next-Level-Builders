from flask import Flask, render_template, request
from helpers import send_email
from dotenv import load_dotenv

#Function loads key value pairs from the .env (non-syndicated environment file)
load_dotenv()

# Configure application
app = Flask(__name__)

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

    # If the user hasn't submitted a contact form yet, then load the contact page
    else:
        return render_template("contact.html")
