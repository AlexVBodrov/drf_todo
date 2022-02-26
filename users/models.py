from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser, models.Model):
    user_name = models.CharField(max_length=64)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    email = models.EmailField(unique=True)
    