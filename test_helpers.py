import unittest, boto3, os
from moto import mock_aws
from helpers import fetch_parameters
from dotenv import dotenv_values

class TestParameterPut(unittest.TestCase):

    @mock_aws
    def test_parameter_get(self):
        client = boto3.client('ssm')
        parameters = {**dotenv_values(".env")}
        keysList = list(parameters.keys())
        valuesList = list(parameters.values())
        
        i = 0

        while i < len(keysList):
            client.put_parameter(
                Name=keysList[i],
                Value=valuesList[i],
                Type='SecureString')
            i += 1
            
        response = client.get_parameter(
            Name='contactnextlevelbuilders_email',
            WithDecryption=True
        )

        print(response['Parameter']['Value'])

    if __name__ == '__main__':
        unittest.main()