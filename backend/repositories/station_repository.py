from typing import Dict
from datetime import datetime

from station.models import Station
from repositories.abstract_repositories.station_repository import ABCStationRepository


class StationRepository(ABCStationRepository):
    def update(self, station: Dict) -> bool:
        station_id = station["id"]
        now = datetime.now()
        station = Station.objects.filter(id=station_id).update(
            name=station["name"],
            volume_percentage=station["volume_percentage"],
            updated_at=now
        )

    def get_by_id(self, station_id: int) -> Dict:
        try:
            station = Station.objects.get(id=station_id)
            return {
                "id": station.id,
                "name": station.name,
                "volume_percentage": station.volume_percentage,
                "updated_at": station.updated_at,
            }
        except Station.DoesNotExist:
            return None
