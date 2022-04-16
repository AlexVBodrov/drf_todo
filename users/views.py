from rest_framework import viewsets
from rest_framework import mixins

from .models import User
from .serializers import UserModelSerializer, User_V2_ModelSerializer

from rest_framework.viewsets import ModelViewSet

class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class User_V2_ModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = User_V2_ModelSerializer


# модель User: есть возможность просмотра списка и каждого пользователя в
# отдельности, можно вносить изменения, нельзя удалять и создавать;


class UserCustomViewSet(mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
        Allow: GET, PUT, PATCH, HEAD, OPTIONS
    """
    queryset = User.objects.all()
    serializer_class = UserModelSerializer