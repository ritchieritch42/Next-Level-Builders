import unittest, boto3
from moto import mock_ssm

class TestMyClass(unittest.TestCase):
    client = None

    def setUp(self) -> None:
          self.mock_ssm = moto.mock_aws
          self.mock_ssm.start()

          self.client = boto3.client('ssm')
          self.client.put_parameter(Name='test', Value='foo', Type='String')

    def tearDown(self) -> None:
         self.mock_ssm.stop()
          
    def test_something(self):
        response = self.client.get_parameter(Name='test')
        value = response['Parameter']['Value']
        self.assertEqual(value, 'foo')

if __name__ == "__main__":
    unittest.main()