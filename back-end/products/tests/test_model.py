from django.test import TestCase
from ..models import Product
from django.core.exceptions import ValidationError


class ProductModelTestCase(TestCase):
    def setUp(self):
        self.valid_product_data = {
            'name': 'Produto teste',
            'description': 'Descrição teste',
            'value': 10.99
        }

    # Criação de um produto
    def test_valid_product_creation(self):
        product = Product.objects.create(**self.valid_product_data)
        self.assertEqual(product.name, self.valid_product_data['name'])
        self.assertEqual(product.description,
                         self.valid_product_data['description'])
        self.assertEqual(product.value, float(
            self.valid_product_data['value']))

    # Dado inválido para o campo value
    def test_invalid_product_creation_invalid_value(self):
        invalid_product_data = {
            'name': 'Produto teste',
            'description': 'Descrição teste',
            'value': 'Valor inválido'
        }
        with self.assertRaises(ValidationError):
            Product.objects.create(**invalid_product_data)

    # Campo name faltando preencher
    def test_invalid_product_creation_missing_fields(self):
        invalid_product_data = {
            # 'name': 'Produto teste', # Campo faltando
            'description': 'Descrição teste',
            'value': 10.99
        }

        invalid_product = Product(**invalid_product_data)

        with self.assertRaises(ValidationError):
            invalid_product.full_clean()

    # Valor negativo no campo value
    def test_invalid_product_creation_negative_value(self):
        invalid_product_data = {
            'name': 'Produto teste',
            'description': 'Descrição teste',
            'value': -10.99
        }

        invalid_product = Product(**invalid_product_data)

        with self.assertRaises(ValidationError):
            invalid_product.full_clean()
