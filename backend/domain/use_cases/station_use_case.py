from domain.use_cases.abstract_use_cases.station_use_case import ABCStationUseCase
from station.exceptions import StationNotFoundException, VolumePercentageInvalidException
from repositories.abstract_repositories.station_repository import ABCStationRepository
from repositories.abstract_repositories.station_action_repository import ABCStationActionRepository


class StationUseCase(ABCStationUseCase):
    def __init__(self, station_repository, station_action_repository) -> None:
        self.station_data_access: ABCStationRepository = station_repository()
        self.station_action_data_access: ABCStationActionRepository = station_action_repository()

    def update(self, station_id: int, volume_percentage: float) -> bool:
        station = self.station_data_access.get_by_id(station_id)
        if not station:
            raise StationNotFoundException()
        
        if volume_percentage < 0 or volume_percentage > 100:
            raise VolumePercentageInvalidException()
        
        station["volume_percentage"] = volume_percentage
        self.station_data_access.update(station=station)

        self.station_action_data_access.create(
            station_id=station_id,
            action_type="update",
            metadata={"volume_percentage": volume_percentage}
        )

        return True

    def confirm_collect(self, station_id: int) -> bool:
        station = self.station_data_access.get_by_id(station_id)
        if not station:
            raise StationNotFoundException()

        station["volume_percentage"] = 0
        self.station_data_access.update(station=station)

        self.station_action_data_access.create(
            station_id=station_id,
            action_type="confirm_collect",
            metadata={}
        )

        return True
