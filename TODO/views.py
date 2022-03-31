from rest_framework.viewsets import ModelViewSet
from TODO.models import TODO, Project
from TODO.serializers import TODOModelSerializer, ProjectModelSerializer


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
