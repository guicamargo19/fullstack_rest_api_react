from django.test import TestCase
from ..serializers import ProductSerializer


class ProductSerializerTestCase(TestCase):
    def setUp(self):
        self.product_data = {
            'name': 'Produto teste',
            'description': 'Descrição teste',
            'value': '10.99'
        }

    # Teste de validação do Serializer
    def test_product_serializer(self):
        serializer = ProductSerializer(data=self.product_data)
        self.assertTrue(serializer.is_valid())

        # Verifica se os dados serializados estão corretos
        serialized_data = serializer.data
        self.assertEqual(serialized_data['name'], self.product_data['name'])
        self.assertEqual(
            serialized_data['description'],
            self.product_data['description']
        )
        self.assertEqual(float(
            serialized_data['value']),
            float(self.product_data['value'])
        )
        # Convertendo para float para lidar com possíveis diferenças de tipo
