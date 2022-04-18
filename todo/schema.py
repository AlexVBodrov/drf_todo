"""
1) С помощью GraphQL создать схему, которая позволит одновременно получать ToDo, проекты
и пользователей, связанных с проектом.
# Решение:
# An example GraphQL query might look like(с помощью такого например запроса в GraphQL):
{
	allTodos{
    id
    name
    text
    name
    created
    author{
      id
      username
    }
      project{
        name
        linkRepository
          usersList {
            id
            username
            email
          }
    }
  }
}
"""
import graphene
from graphene import ObjectType, Schema
from graphene_django import DjangoObjectType

from graphene_django import DjangoObjectType
from TODO.models import Project, TODO
from users.models import User


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class TODOType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class Query(graphene.ObjectType):
    #     queryset => all_Projects, all_TODO, all_Users
    all_Projects = graphene.List(ProjectType)
    def resolve_all_Projects(root, info):
        return Project.objects.all()

    all_TODOs = graphene.List(TODOType)
    def resolve_all_TODOs(root, info):
        return TODO.objects.all()

    all_Users = graphene.List(UserType)
    def resolve_all_Users(root, info):
        return User.objects.all()

    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))
    def resolve_user_by_id(self, info, id):
      try:
        return User.objects.get(id=id)
      except User.DoesNotExist:
        return None
    
    project_by_user = graphene.List(ProjectType, name=graphene.String(required=False))

    def resolve_project_by_user(self, info, name=None):
      project = Project.objects.all()
      if name:
        project = Project.objects.filter(users_list__username=name)
      return project


schema = graphene.Schema(query=Query)

