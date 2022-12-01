import React, { useEffect, useState } from 'react';
import { Paper, Container } from '@mui/material';
import Header from './component/header/Header';
import './App.css';
import { loadRestIdName, RestSimple } from './util/loadRestIdName';
import VerticalLinearStepper from './component/Stepper';

function App() {
  const [restSimples, setRestSimples] = useState<Array<RestSimple>>([]);

  useEffect(() => {
    const load = async () => {
      const restSimplesRes = await loadRestIdName();
      setRestSimples(restSimplesRes);
    };

    load();
  }, []);

  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">
        <Paper
          sx={{
            bgcolor: 'white',
            mt: 1,
            p: '0.8rem 1rem 0.8rem 1rem',
            border: 'none',
            borderRadius: '8px',
            boxShadow:
              'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(48, 46, 56, 0.06) 0px 3px 10px 0px',
          }}
        >
          <VerticalLinearStepper restSimples={restSimples} />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
