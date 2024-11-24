from django.db import models


class Station(models.Model):
    name = models.CharField(max_length=255)
    volume_percentage = models.FloatField(default=0.0)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"Estação {self.name} - {self.volume_percentage}%"

class StationAction(models.Model):
    action_type = models.CharField(max_length=255)
    station = models.ForeignKey(Station, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    metadata = models.JSONField()

    def __str__(self) -> str:
        return f"[{self.station.name}]  {self.action_type}: {self.created_at.strftime('%d/%m/%Y %H:%M:%S')}"
