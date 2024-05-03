from django.db import models
from django.forms import ValidationError


def non_negative_validator(value):
    if value < 0:
        raise ValidationError('O valor não pode ser negativo.')


class Product(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(max_length=1000, blank=False, null=False)
    value = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[non_negative_validator],
        blank=False,
        null=False
    )

    def clean(self):
        # Validar se os campos obrigatórios estão presentes
        if not self.name or not self.description or not self.value:
            raise ValidationError('Todos os campos são obrigatórios.')

    def __str__(self):
        return self.name
