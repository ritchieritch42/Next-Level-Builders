import unittest, boto3
from unittest.mock import patch, MagicMock
from moto import mock_aws
from helpers import fetch_parameters, send_email
from dotenv import dotenv_values

class TestHelpers(unittest.TestCase):
    @mock_aws
    def test_parameter_get(self):
        client = boto3.client('ssm')
        env_parameters = {**dotenv_values(".env")}
        keysList = list(env_parameters.keys())
        valuesList = list(env_parameters.values())

        print(env_parameters)
        print(keysList)
        print(valuesList)
        
        i = 0
        length_env = len(keysList)
        print(length_env)

        while i < length_env:
            client.put_parameter(
                Name=keysList[i],
                Value=valuesList[i],
                Type='String')
            i += 1

        prefix = 'contactnextlevelbuilders_'
        parameters = fetch_parameters(prefix)

        self.assertEqual('contactnextlevelbuilders@gmail.com', parameters['contactnextlevelbuilders_email'])

if __name__ == '__main__':
    unittest.main()

    # @patch('helpers.smtplib.SMTP', autospec=True)
    # def test_send_email(self):
    #     # Setup
    #     parameters = {
    #         'contactnextlevelbuilders_email': 'sendemail@email.com',
    #         'contactnextlevelbuilders_receiver-email': 'receiveremail@email.com',
    #         'contactnextlevelbuilders_password': 'testpassword'
    #     }

    #     subject = 'Test Email'
    #     body = 'Test Body'

    #     # Run
    #     result = send_email(subject, body, parameters)

    #     # Assert
    #     # Check if the SMTP session was started with the correct server and port
    #     mock_smtp.assert_called_once_with("smtp.gmail.com", 587)

    #     # Check if starttls was called to start TLS encryption
    #     mock_server.starttls.assert_called_once()

    #     # Check if login was called with the correct email and password
    #     mock_server.login.assert_called_once_with('sendemail@email.com', 'testpassword')

    #     # Check if sendmail was called with the correct parameters
    #     mock_server.sendmail.assert_called_once_with(
    #         'sendemail@email.com',
    #         'receiveremail@email.com',
    #         mock_server.sendmail.call_args[0][2]  # The third argument is the email message string
    #     )