import unittest, boto3, json
from moto import mock_aws
from helpers import fetch_parameters
from dotenv import dotenv_values

class TestParameterGet(unittest.TestCase):
    @mock_aws
    def test_parameter_get(self):
        client = boto3.client('ssm')
        env_parameters = {**dotenv_values(".env")}
        keysList = list(env_parameters.keys())
        valuesList = list(env_parameters.values())
        
        i = 0
        length_env = len(keysList)

        while i < length_env:
            client.put_parameter(
                Name=keysList[i],
                Value=valuesList[i],
                Type='SecureString')
            i += 1
         
        prefix = 'contactnextlevelbuilders_'
        parameters = fetch_parameters(prefix)

        print(parameters)

        self.assertEqual(env_parameters['contactnextlevelbuilders_email'], parameters['contactnextlevelbuilders_email'])

    if __name__ == '__main__':
        unittest.main()

class TestS3ContentGet(unittest.TestCase):
    # Mock AWS Environment
    @mock_aws
    def test_s3_get(self):
        # Create a client connection for s3 to test with
        client = boto3.client('s3')
        # Create a test bucket to put JSON data into
        client.create_bucket(
            Bucket='test'
        )

        # Open file object, then load this as JSON into variable s3object
        with open('nextlevelbuilder-1711565908511-5387e3f09914.json', 'r') as file:
            s3object = json.load(file)

        # Put the s3object into the test bucket
        client.put_object(
            Body=json.dumps(s3object),
            Bucket='test',
            Key='test'
        )

        # Retrieve the object from S3 test bucket
        response = client.get_object(Bucket='test', Key='test')
        # Decode the response using UTF-8 standard
        content = response['Body'].read().decode('utf-8')
        # Load as dictionary to reference
        json_content = json.loads(content)

        # Print the content of the return get_object
        print(json_content)
        # Test that it's equal to put_object
        self.assertEqual(s3object, json_content)

    if __name__ == '__main__':
        unittest.main()