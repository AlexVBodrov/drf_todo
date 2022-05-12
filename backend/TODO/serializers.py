from rest_framework.serializers import ModelSerializer, StringRelatedField

from TODO.models import TODO, Project


class TODOModelSerializer(ModelSerializer):
    project = StringRelatedField()
    author = StringRelatedField()
    class Meta:
       model = TODO
       fields = '__all__'



class ProjectModelSerializer(ModelSerializer):
    users_list = StringRelatedField(many=True)
    class Meta:
        model = Project
        fields = '__all__'

class ProjectSerializerBase(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
