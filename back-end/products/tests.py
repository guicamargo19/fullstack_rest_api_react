from django.test import TestCase
from rest_framework.test import APIClient, APITestCase
from .models import Product
from .serializers import ProductSerializer
from rest_framework import status
from django.urls import reverse
from django.core.exceptions import ValidationError


# Teste Model
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

    # Campos inválidos
    def test_invalid_product_creation_invalid_value(self):
        invalid_product_data = {
            'name': 'Produto teste',
            'description': 'Descrição teste',
            'value': 'Valor inválido'
        }
        with self.assertRaises(ValidationError):
            Product.objects.create(**invalid_product_data)

    # Campos faltando
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


# Teste Views (Leitura dos produtos e Deletar um produto por ID)
class ProductViewTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.product = Product.objects.create(
            name='Produto teste',
            description='Descrição teste',
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


# Teste de validação do Serializer
class ProductSerializerTestCase(TestCase):
    def setUp(self):
        self.product_data = {
            'name': 'Produto teste',
            'description': 'Descrição teste',
            'value': '10.99'
        }

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
