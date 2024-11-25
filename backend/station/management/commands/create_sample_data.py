from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

from station.models import Station


class Command(BaseCommand):
    help = 'Cria três estações no banco de dados e um superusuário padrão.'

    def handle(self, *args, **kwargs):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser(
                username='admin',
                email='admin@example.com',
                password='admin'
            )

        stations_data = [
            {'name': 'Gama', 'volume_percentage': 45},
            {'name': 'Vila Olímpia', 'volume_percentage': 0},
            {'name': 'Santana', 'volume_percentage': 85},
        ]

        for station_data in stations_data:
            Station.objects.get_or_create(**station_data)
