import unittest, boto3
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

        print('SUCCESS: ', parameters)

        self.assertEqual('contactnextlevelbuilders@gmail.com', parameters['contactnextlevelbuilders_email'])


if __name__ == '__main__':
    unittest.main()