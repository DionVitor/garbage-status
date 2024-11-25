import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const StationCard = ({ station }) => {
  return (
    <Card
      sx={{
        margin: 2,
        position: 'relative',
        backgroundColor: station.volume_percentage > 80 ? '#ffebee' : 'white',
      }}
    >
      {station.volume_percentage > 80 && (
        <Box
          sx={{
            width: 16,
            height: 16,
            bgcolor: 'error.main',
            borderRadius: '50%',
            position: 'absolute',
            top: 16,
            right: 16,
          }}
        />
      )}

      <CardContent>
        <Typography variant="h5">{station.name}</Typography>
        <Typography variant="body1">Capacidade ocupada: {station.volume_percentage}%</Typography>
        <Link to={`/stations/${station.id}`} style={{ textDecoration: 'none', color: '#4caf50' }} state={{ station }}>
          Ver detalhes
        </Link>
      </CardContent>
    </Card>
  );
};

export default StationCard;
