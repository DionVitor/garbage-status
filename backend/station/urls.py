from django.urls import path, include
from rest_framework.routers import DefaultRouter

from app.django_controllers.station_view import StationViewSet


app_name = 'station'

urlpatterns = [
    path('station/', StationViewSet.as_view({'get': 'list'}), name='station-list'),
    path('station/<int:pk>/', StationViewSet.as_view({'put': 'update'}), name='station-update'),
]
