from django.test import TestCase
from rest_framework.test import APIClient
from .models import Product
from .serializers import ProductSerializer


# Teste Model (Criação de um produto)
class ProductModelTestCase(TestCase):
    def setUp(self):
        self.product = Product.objects.create(
            name='Test Product',
            description='Test Description',
            value=10.99
        )

    def test_product_creation(self):
        self.assertEqual(self.product.name, 'Test Product')
        self.assertEqual(self.product.description, 'Test Description')
        self.assertEqual(self.product.value, 10.99)


# Teste Views (Leitura da ProductList e Deletar um produto por ID)
class ProductViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.product = Product.objects.create(
            name='Test Product',
            description='Test Description',
            value=10.99
        )

    def test_product_list_create_view(self):
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, 200)

    def test_product_retrieve_update_destroy_view(self):
        response = self.client.get(
            f'/api/products/{self.product.id}'  # type: ignore
        )
        self.assertEqual(response.status_code, 200)


class ProductSerializerTestCase(TestCase):
    def setUp(self):
        self.product_data = {
            'name': 'Test Product',
            'description': 'Test Description',
            'value': '10.99'
        }

    def test_product_serializer(self):
        serializer = ProductSerializer(data=self.product_data)
        self.assertTrue(serializer.is_valid())
