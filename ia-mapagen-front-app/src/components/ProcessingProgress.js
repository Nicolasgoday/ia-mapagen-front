import React from "react";
import { Backdrop, LinearProgress, Paper, Button } from "@material-ui/core";

import { Component } from 'react';
import ProgressBar from "../components/ProgressBar";
import ProcessingVideo from "../processingVideo";


const ProcessingProgress = ({ isOpen, close }) => {
  return (
    <Backdrop className="backdrop" open={isOpen}>
      <Paper className="backdrop-card" elevation={3}>
        <h3>Procesamiento en proceso</h3>
        <LinearProgress variant="determinate" value={80} />
        <div className="progress-info">
          <p>Tiempo transcurrido: 00:10:05</p>
          <p>Tiempo restante aproximado: 04:20</p>
        </div>
        
        <div>
      <ProcessingVideo  />
      
    </div>
        <Button variant="outlined" onClick={close}>
          Detener
        </Button>
      </Paper>
    </Backdrop>
  );
};

export default ProcessingProgress;
/*
<div className="App">
<button className="btn btn-success" onClick={()=>this.simular()}>Simular</button>
{this.state.archivosRestantes>0 &&
<ProgressBar 
  porcentaje={this.state.porcentaje}
  texto="Subiendo Archivos(s) desde App"
/>
}

</div>*/