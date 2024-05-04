from django.test import TestCase
from rest_framework.test import APIClient
from ..models import Product


class ProductViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.product = Product.objects.create(
            name='Produto teste',
            description='Descrição teste',
            value=10.99
        )

    # Leitura dos produtos
    def test_product_list_create_view(self):
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, 200)

    # Deletar um produto por ID
    def test_product_retrieve_update_destroy_view(self):
        response = self.client.get(
            f'/api/products/{self.product.id}'  # type: ignore
        )
        self.assertEqual(response.status_code, 200)
