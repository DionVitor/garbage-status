from rest_framework.viewsets import ModelViewSet
from drf_yasg.utils import swagger_auto_schema

from station.models import Station
from station.serializers import StationSerializer


class StationViewSet(ModelViewSet):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

    @swagger_auto_schema(operation_description="Retorna uma lista com as estações de lixo")
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @swagger_auto_schema(operation_description="Edita uma estação de lixo")
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
