# Use an official Python runtime as the base image
FROM python:3.12.2

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
COPY .env /app.env

# Load environment variables from the .env file
CMD ["bash", "-c", "source /app/.env && python app.py"]
