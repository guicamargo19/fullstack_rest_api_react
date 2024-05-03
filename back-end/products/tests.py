from django.test import TestCase
from rest_framework.test import APIClient, APITestCase
from .models import Product
from .serializers import ProductSerializer
from rest_framework import status
from django.urls import reverse


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


class ProductAPITestCase(APITestCase):
    def setUp(self):
        self.product_data = {
            'name': 'Test Product',
            'description': 'Test Description',
            'value': '10.99'
        }
        self.product = Product.objects.create(**self.product_data)

    def test_create_product(self):
        url = reverse('product-list-create')
        response = self.client.post(url, self.product_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Product.objects.count(), 2)
        # Um produto já existe, então deveria ser 2 agora

    def test_retrieve_product(self):
        url = reverse('product-detail', args=[self.product.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, ProductSerializer(self.product).data)

    def test_update_product(self):
        updated_data = {
            'name': 'Updated Test Product',
            'description': 'Updated Test Description',
            'value': '15.99'
        }
        url = reverse('product-detail', args=[self.product.id])
        response = self.client.put(url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.product.refresh_from_db()
        self.assertEqual(self.product.name, updated_data['name'])
        self.assertEqual(self.product.description, updated_data['description'])
        self.assertEqual(str(self.product.value), updated_data['value'])

    def test_partial_update_product(self):
        partial_updated_data = {
            'value': '15.99'
        }
        url = reverse('product-detail', args=[self.product.id])
        response = self.client.patch(url, partial_updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.product.refresh_from_db()
        self.assertEqual(
            str(self.product.value),
            partial_updated_data['value']
        )

    def test_delete_product(self):
        url = reverse('product-detail', args=[self.product.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Product.objects.count(), 0)
