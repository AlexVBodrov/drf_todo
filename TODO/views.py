from rest_framework.viewsets import ModelViewSet
from TODO.models import TODO, Project
from TODO.serializers import TODOModelSerializer, ProjectModelSerializer
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

class ProjectLimitOffset(LimitOffsetPagination):
    default_limit = 10


class TODOLimitOffset(LimitOffsetPagination):
    default_limit = 20


# модель ToDo: доступны все варианты запросов;v
#  при удалении не удалять ToDo, а выставлять признак, что оно закрыто;v
#  добавить фильтрацию по проекту;v
#  для постраничного вывода установить размер страницы 20.v


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    pagination_class = TODOLimitOffset
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['project']

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        return Response(f'TODO.is_active = {instance.is_active}')


# модель Project: доступны все варианты запросов;v
#  для постраничного вывода установить размер страницы 10 записей;v
#  добавить фильтрацию по совпадению части названия проекта;

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffset
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']