from abc import ABC, abstractmethod


class ABCStationUseCase(ABC):
    @abstractmethod
    def update(self, station_id: int, volume_percentage: float) -> bool:
        pass
