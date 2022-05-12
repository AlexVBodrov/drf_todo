"""todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from rest_framework import permissions

from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from graphene_django.views import GraphQLView

from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter

from users.views import UserCustomViewSet, UserModelViewSet # , User_V2_ModelViewSet
from TODO.views import TODOModelViewSet, ProjectModelViewSet

router = DefaultRouter()
router.register('users', UserCustomViewSet, basename='users')
router.register('control_users', UserModelViewSet, basename='control_users')
# router.register('control_users_v2', User_V2_ModelViewSet, basename='control_users_v2')
router.register('todos', TODOModelViewSet)
router.register('projects', ProjectModelViewSet)

schema_view = get_schema_view(
    openapi.Info(
        title="todo",
        default_version='v1',
        description="Documentation to out project",
        contact=openapi.Contact(email="admin@admin.local"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    # path('',TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),

    path('api/users/v2/',include('users.urls',namespace='v2')),
    path('api/users/v1/',include('users.urls',namespace='v1')),

    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),

    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0),
    name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path("graphql/", GraphQLView.as_view(graphiql=True)),
]


