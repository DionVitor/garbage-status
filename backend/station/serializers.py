from rest_framework import serializers

from .models import Station, StationAction


class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ['id', 'name', 'volume_percentage', 'updated_at']


class StationActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = StationAction
        fields = ['id', 'station', 'created_at', 'metadata', 'action_type']
