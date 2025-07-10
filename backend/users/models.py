from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    full_name = models.CharField(max_length=255)
    username = models.CharField(max_length=100, unique=True)
    phone_number = models.DecimalField(max_digits=9, decimal_places=0, null=True, blank=True)
    email = models.EmailField(unique=True)
    referrer = models.CharField(max_length=100, null=True, blank=True, default=None)
    

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.username