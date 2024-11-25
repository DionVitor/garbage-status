import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmCollection, updateStationVolume } from '../services/api';
import {
  Typography,
  Button,
  Box,
  TextField,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { station } = location.state || {};

  const [volumePercentage, setVolumePercentage] = useState(station?.volume_percentage || 0);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newVolume, setNewVolume] = useState(volumePercentage);

  if (!station) {
    return <Typography>Estação não encontrada.</Typography>;
  }

  const handleConfirm = async () => {
    try {
      await confirmCollection(station.id);
      alert('Coleta confirmada com sucesso!');
      navigate('/stations');
    } catch (error) {
      console.error('Erro ao confirmar coleta:', error);
      alert('Erro ao confirmar coleta.');
    }
  };

  const handleUpdateVolume = async () => {
    setSaving(true);
    try {
      const volumeAsFloat = parseFloat(newVolume);

      if (isNaN(volumeAsFloat)) {
        alert('Por favor, insira um valor válido para o volume.');
        setSaving(false);
        return;
      }

      await updateStationVolume(station.id, volumeAsFloat);
      alert('Volume atualizado com sucesso!');
      setVolumePercentage(volumeAsFloat);
      setOpenDialog(false);
      navigate('/stations');
    } catch (error) {
      console.error('Erro ao atualizar volume:', error);
      alert('Erro ao atualizar o volume.');
    } finally {
      setSaving(false);
    }
  };

  const openDialogHandler = () => {
    setNewVolume(volumePercentage);
    setOpenDialog(true);
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ padding: '20px' }}>
        <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="voltar" 
          sx={{ position: 'absolute', top: 80, left: 20 }}
          onClick={() => navigate('/stations')}
        >
        <ArrowBackIcon />
        </IconButton>
        <Typography variant="h3" align="center" sx={{ marginTop: 5, marginBottom: 2 }}>
            {station.name}
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 8 }} align='center'>
            Capacidade ocupada atual: {volumePercentage > 0 ? `${volumePercentage}%` : '0%'}
        </Typography>

        {loading && <CircularProgress sx={{ marginBottom: 2, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />}

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
            <Button
            variant="contained"
            color="primary"
            onClick={openDialogHandler}
            >
            Atualizar Volume
            </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Button
            variant="contained"
            color="secondary"
            onClick={handleConfirm}
            >
            Confirmar Coleta
            </Button>
        </Box>

        <Dialog open={openDialog} onClose={closeDialogHandler}>
            <DialogTitle>Alterar Volume da Estação</DialogTitle>
            <DialogContent>
            <TextField
                variant="outlined"
                type="number"
                fullWidth
                value={newVolume}
                onChange={(e) => setNewVolume(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={closeDialogHandler} color="primary">
                Cancelar
            </Button>
            <Button onClick={handleUpdateVolume} color="primary" disabled={saving}>
                {saving ? 'Salvando...' : 'Salvar'}
            </Button>
            </DialogActions>
        </Dialog>
    </Box>
  );
};

export default StationDetails;
