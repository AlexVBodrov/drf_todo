from rest_framework import viewsets
from rest_framework import mixins

from .models import User
from .serializers import UserModelSerializer

from rest_framework.viewsets import ModelViewSet

class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


# модель User: есть возможность просмотра списка и каждого пользователя в
# отдельности, можно вносить изменения, нельзя удалять и создавать;


class UserCustomViewSet(mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
        Allow: GET, PUT, PATCH, HEAD, OPTIONS
    """
    queryset = User.objects.all()
    serializer_class = UserModelSerializer