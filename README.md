# Next Level Builders, LLC Static Website
#### Video Demo:  (Click Here|https://youtu.be/s8veNXkMZSE)a
# Introduction
#### This project was inspired by my desire to go into Web Development in the future as well as give something free of expense to someone in my community. After pondering on what sort of a web application to build I decided that a well-designed small business website was within my scope of skills at the time. My father recently started his own contracting business and is starting the marketing process. The beginning of this process being an online presence, starting with a website.

# Overview
#### The website design that my client (dad) and I agreed on was a simplistic, yet clean design with a basic contact form. This website would have a few tabs including a home, about, and contact page. The home page has excellent photos of the most recent job of a dermatology office, along with a business slogan, mission statement, and founding date. The about page quickly overviews my client's experience in the estimating and project management field for commercial construction. Lastly, the contact us page provides a basic email template along with a couple points of contact for my client to contact the interested party at.

# Files
#### The files are broken up into a couple of directories, static and templates, as well as a few solo files. The static directory consists of images and the css styling file. The templates directory has all the pages for the website including home/index, about, contact, and contacterror, which all extend a layout.html file for the navbar at the top of each page. The solo files include the routes Python document, app.py, the send email helpers doc, helpers.py, sources I used to learn the materials needed, sources.txt, and last but not least this readme.md file you're in right now. A file not here is for .gitignore, which contains sensitive information for contact submission.

# Send_email function
#### The send email function in helpers.py takes the information from the form on the contact.html page and sends it to the company administrators email. There are several modules that I had to import for this including os for operating system commands, email.message for the emailmessage class, ssl for secure transfer and encryption when sending the email, smtplib for accessing internet simple mail commands, and lastly a file for sensitive credentials.

#### For more context, before I was able to get started with this function, I had to create an administrator Google account for the client with two-factor authentication enabled, then I had to request an app password, which is a 16 character password consisting of numbers and letters of the alphabet.
#### The send_email function is not complicated and I have plenty of comments in helpers.py explaining each step of the process, so I will not be retyping those steps out here.

# Closing/Summary
#### This roughly static website provided me with experience to do more Web Development Projects. The send_email function can be used by anyone as long as I am quoted with my full name as a source with the date (yy/mm) used after. Thank you Andrew Thomas in Denver for the help in learning how to host this website!
#### P.S. ~ I did not design the company logo, my amazing wife did that and I used the image, giving her credit for it in sources.txt.
