from domain.use_cases.station_use_case import StationUseCase
from repositories.station_repository import StationRepository
from repositories.station_action_repository import StationActionRepository



def station_use_case_factory():
    return StationUseCase(StationRepository, StationActionRepository)
