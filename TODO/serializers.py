from rest_framework.serializers import ModelSerializer
from TODO.models import TODO, Project


class TODOModelSerializer(ModelSerializer):
   class Meta:
       model = TODO
       fields = '__all__'



class ProjectModelSerializer(ModelSerializer):
   class Meta:
       model = Project
       fields = '__all__'
