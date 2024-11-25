import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h3" align="center" sx={{ marginBottom: 8, marginTop: 5 }}>
        Sistema de Monitoramento de Estações de Lixo
      </Typography>

      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h5" gutterBottom>
          Propósito do Projeto
        </Typography>
        <Typography variant="body1" paragraph>
          O Sistema de Monitoramento de Estações de Lixo tem como objetivo otimizar a gestão do lixo em estações nas cidades.
          Através da monitorização em tempo real das estações de lixo, conseguimos medir o volume de lixo acumulado, 
          facilitando a logística de coleta.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h5" gutterBottom>
          Como Funciona
        </Typography>
        <Typography variant="body1" paragraph>
          O sistema funciona com uma interface web responsivo, onde os usuários podem visualizar todas as estações de lixo 
          e seu status em tempo real. A cada estação de lixo é atribuído o volume de lixo (em percentual) atual, e o sistema 
          realiza a atualização periódica dessa informação.
        </Typography>
        <Typography variant="body1" paragraph>
          A gestão é realizada por meio da atualização constante do volume das estações.
          Quando o volume atinge um limite crítico, o sistema cria alertas automaticamente para a 
          equipe responsável pela coleta.
        </Typography>
        <Typography variant="body1" paragraph>
          O sistema também permite a confirmação de coleta de lixo, garantindo que o processo de descarte e recolhimento 
          do lixo seja eficiente e mantenha a estação atualizada do seu novo status, que seria 0% de capacidade ocupada.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
