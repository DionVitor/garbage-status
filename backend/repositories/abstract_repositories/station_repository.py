from abc import ABC, abstractmethod
from typing import Dict


class ABCStationRepository(ABC):
    @abstractmethod
    def update(self, station: Dict) -> bool:
        pass

    @abstractmethod
    def get_by_id(self, station_id: int) -> Dict:
        pass
