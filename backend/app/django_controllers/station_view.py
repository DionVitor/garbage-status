from rest_framework.viewsets import ModelViewSet
from drf_yasg.utils import swagger_auto_schema
from django.http import JsonResponse

from station.models import Station
from station.serializers import StationSerializer, StationUpdateSerializer
from app.django_controllers.use_case_factory import station_use_case_factory

class StationViewSet(ModelViewSet):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

    @swagger_auto_schema(operation_description="Retorna uma lista com as estações de lixo")
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @swagger_auto_schema(operation_description="Edita uma estação de lixo", request_body=StationUpdateSerializer)
    def update(self, request, *args, **kwargs):
        station_id = kwargs.get("pk")
        volume_percentage = request.data.get("volume_percentage")

        use_case = station_use_case_factory()
        use_case.update(station_id, volume_percentage)

        return JsonResponse(status=200, data={"message": "Estação atualizada com sucesso"})
