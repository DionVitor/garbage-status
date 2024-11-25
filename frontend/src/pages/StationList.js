import React, { useEffect, useState } from 'react';
import { getStations } from '../services/api';
import StationCard from '../components/StationCard';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';

const StationsList = () => {
    const [stations, setStations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchStations = async () => {
        try {
            const data = await getStations();
            setStations(data);
        } catch (error) {
            console.error('Erro ao buscar estações:', error);
        }
        setLoading(false);
    };

    const intervalId = setInterval(fetchStations, 3000);

    fetchStations();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: 2, marginTop: 5 }}>
        Lista de Estações
      </Typography>
      <Typography variant="h5" align="center" sx={{ marginBottom: 8, marginTop: 2 }}>
        Aqui é possível visualizar o status de todas as estações de lixo.
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {stations.map((station) => (
            <Grid item xs={12} sm={6} md={4} key={station.id}>
              <StationCard station={station} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default StationsList;
