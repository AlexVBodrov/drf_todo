from django.contrib import admin
from .models import TODO, Project

# Register your models here.

admin.site.register(TODO)
admin.site.register(Project)