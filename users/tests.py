import math
import json

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory,force_authenticate,APIClient,APISimpleTestCase,APITestCase
from mixer.backend.django import mixer
from .models import User

from users.views import UserModelViewSet
from TODO.models import TODO, Project
from TODO.serializers import ProjectSerializerBase


# Create your tests here.


class TestUserCustomViewSet(TestCase):

    def setUp(self) -> None:
        self.name = 'admin2'
        self.password = 'admin2_123456789'
        self.email = 'admin2_123456789@mail.ru'

        self.data = {'first_name':'Александр','last_name':'Пушкин'}
        self.data_put = {'first_name':'Василий','last_name':'Иванов'}
        self.url = '/api/users/'
        self.admin = User.objects.create_superuser(username=self.name,password=self.password,email=self.email)

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        view = UserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post(self.url,self.data,format='json')
        view = UserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code,status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self):
        factory = APIRequestFactory()
        request = factory.post(self.url, self.data, format='json')
        force_authenticate(request,self.admin)
        view = UserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_detail(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        response = client.get(f'{self.url}{user.id}/')
        self.assertEqual(response.status_code,status.HTTP_200_OK)

    def test_create_guest_api(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        response = client.put(f'{self.url}{user.id}/',self.data_put)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin_api(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        client.login(username=self.name,password=self.password)
        response = client.put(f'{self.url}{user.id}/',self.data_put)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        auth = User.objects.get(id=user.id)
        self.assertEqual(auth.first_name,'Василий')
        self.assertEqual(auth.last_name,'Иванов')
        client.logout()

    def tearDown(self) -> None:
        pass


class TestProjectSerializerBase(APITestCase):

    def setUp(self) -> None:
        self.name = 'admin2'
        self.password = 'admin2_123456789'
        self.email = 'admin2_123456789@mail.ru'

        self.data = {'first_name':'Александр','last_name':'Пушкин'}
        self.data_put = {'first_name':'Василий','last_name':'Иванов'}
        self.url = '/api/users/'
        self.admin = User.objects.create_superuser(username=self.name,password=self.password,email=self.email)


    def test_get_list(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code,status.HTTP_200_OK)


    def tearDown(self) -> None:
        pass