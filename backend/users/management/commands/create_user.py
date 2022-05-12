from django.core.management.base import BaseCommand
from users.models import User



class Command(BaseCommand):

    def handle(self, *args, **options):
        User.objects.create_superuser(username='admin', password='admin', email='admin@mail.ru')
        data_user = {
            'username': 'user001',
            'first_name': 'user_first_name',
            'last_name': 'user_last_name',
            'email': 'user001@mail.ru'
        }
        User.objects.create(**data_user)
        
