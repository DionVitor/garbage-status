from abc import ABC, abstractmethod


class ABCStationActionRepository(ABC):
    @abstractmethod
    def create(self, station_id: int, action_type: str, metadata: dict) -> None:
        pass
