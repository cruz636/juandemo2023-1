from django.conf import settings
from django.db import models
class Ebank(models.Model):
    'Generated Model'
    address = models.CharField(max_length=255,)
    provides_card = models.BooleanField()
    name = models.CharField(max_length=255,)
