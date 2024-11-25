import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getStations = async () => {
  const response = await api.get('/station/');
  return response.data;
};

export const confirmCollection = async (stationId) => {
    const response = await api.patch(`/station/${stationId}/confirm_collect/`);
    return response.data;
};

export const updateStationVolume = async (stationId, volumePercentage) => {
  const response = await api.put(`/station/${stationId}/`, { volume_percentage: volumePercentage });
  return response.data;
};

export default api;
