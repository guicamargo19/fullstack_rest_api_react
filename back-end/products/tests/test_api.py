# type: ignore
from rest_framework.test import APITestCase
from ..models import Product
from ..serializers import ProductSerializer
from rest_framework import status
from django.urls import reverse


class ProductAPITestCase(APITestCase):
    def setUp(self):
        self.product_data = {
            'name': 'Produto teste',
            'description': 'Descrição teste',
            'value': '10.99'
        }
        # Criado um produto
        self.product = Product.objects.create(**self.product_data)

    # Criando outro produto
    def test_create_product(self):
        url = reverse('product-list-create')
        response = self.client.post(url, self.product_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Product.objects.count(), 2)
        # Um produto já existe, então agora deveria ser 2 agora

    # Recuperando um produto
    def test_retrieve_product(self):
        url = reverse('product-detail', args=[self.product.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, ProductSerializer(self.product).data)

    # Atualizando um produto
    def test_update_product(self):
        updated_data = {
            'name': 'Produto teste atualizado',
            'description': 'Descrição teste atualizada',
            'value': '15.99'
        }
        url = reverse('product-detail', args=[self.product.id])
        response = self.client.put(url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.product.refresh_from_db()
        self.assertEqual(self.product.name, updated_data['name'])
        self.assertEqual(self.product.description, updated_data['description'])
        self.assertEqual(str(self.product.value), updated_data['value'])

    # Atualização parcial de um produto
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

    # Apagando um produto
    def test_delete_product(self):
        url = reverse('product-detail', args=[self.product.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Product.objects.count(), 0)
