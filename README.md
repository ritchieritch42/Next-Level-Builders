# Next Level Builders, LLC

# Introduction

#### This project was inspired by my desire to go into Web Development in the future. After pondering on what sort of a web application to build I decided that a well-designed small business website was within my scope of skills at the time. My father recently started his own contracting business and is starting the marketing process. The beginning of this process being an online presence, starting with a website.

# Overview

#### The website design that my client and I agreed on was a simplistic, yet clean design with a basic contact form. This website would have a few tabs including a home, about, and contact page as well as have the potential to expand to include a projects, blog, or other tabs.

#### The home page has excellent photos of the most recent job of a dermatology office, along with a business slogan, mission statement. The about page quickly overviews my client's experience in the estimating and project management field for construction. Lastly, the contact us page provides a basic email template along with a couple points of contact for my client to contact the interested party at. Each page has a navbar at the top and a footer at the bottom.

# Files

#### The files are broken up into a couple of directories, static and templates, as well as a several solo files. The static directory consists of images, css styling, and some javascript front end interaction scripts. The templates directory has all the pages for the website including home/index, about, contact, sendemailfailure, and emailsuccess, which all extend a layout.html file for the navbar at the top of each page and a footer at the bottom of each page.

#### The solo files include the routes in app.py, the send_email and fetch_parameters function in helpers.py, sources I used to learn the materials needed in sources.txt, application.py for AWS Elastic Beanstalk to recognize app.py as the routes, .ebignore for Elastic Beanstalk to know which files to ignore, and last test_helpers to confirm that the fetch parameters/send_email functions work.

# Send_email function

#### The send email function in helpers.py takes the information from the form on the contact.html page and the return object of fetch_parameters as arguments. Then it forms an email and sends it to the company administrators account. There are several modules that I had to import for this including smtplib to secure a TLS connection, MIMEMultipart to form the email object, and MIMEText to attach the body.

#### For more context, before I was able to get started with this function, I had to create an administrator Google account for the client with two-factor authentication enabled, then I had to request an app password, which is a 16 character password consisting of numbers and letters of the alphabet. The emails and password are stored securely in AWS.

# Fetch_parameters

#### The fetch parameters function in helpers.py takes a 'prefix' argument that is a string that all the relevant parameters begin with, and securely accesses AWS Parameter Store. It then returns an object with all the Names of the parameters specified. It only uses the boto3 library. After the object is returned, I create an object and add to it all the parameters for an easy key reference point in send_email.

# Closing/Summary

#### This flask app provided me with at least 100 hours of practical learning. The send_email or fetch_parameters function can be used by anyone as long as I am quoted with my full name as a source with the this project was last updated (yy/mm) after. Thank you Andrew Thomas in Denver for the help in learning how to host this website on AWS!
