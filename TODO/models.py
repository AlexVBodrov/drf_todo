from django.db import models
from users.models import User

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=100, unique=True)
    link_repository = models.URLField(blank=True, null=True)
    users_list = models.ManyToManyField(User)


class TODO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField()
    created = models.DateTimeField(verbose_name="created", auto_now_add=True)
    updated = models.DateTimeField(verbose_name="updated", auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(verbose_name="active", default=True)

