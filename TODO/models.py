from re import M
from django.db import models
from users.models import User

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=100, unique=True)
    link_repository = models.URLField(blank=True, null=True)
    users_list = models.ManyToManyField(User)