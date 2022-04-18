from rest_framework.serializers import ModelSerializer
from .models import User


class UserModelSerializer(ModelSerializer):
   class Meta:
       model = User
       fields = ['username', 'first_name', 'last_name', 'email']


class User_V2_ModelSerializer(ModelSerializer):
   class Meta:
       model = User
       fields = ['username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_staff']