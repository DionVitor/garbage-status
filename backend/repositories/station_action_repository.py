from repositories.abstract_repositories.station_action_repository import ABCStationActionRepository
from station.models import StationAction, Station


class StationActionRepository(ABCStationActionRepository):
    def create(self, station_id: int, action_type: str, metadata: dict) -> None:
        station = Station.objects.get(id=station_id)
        StationAction.objects.create(
            station=station,
            action_type=action_type,
            metadata=metadata
        )
