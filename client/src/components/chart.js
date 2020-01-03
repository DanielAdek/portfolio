import React from 'react';
import CanvasJSReact from "../assets/canvas.react";
import { ChartOptions } from '../assets/projectData';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const Chart = () => {
  const containerProps = {
    height: '90%',
    top: '6px',
    position: 'relative'
  };
  return (
      <CanvasJSChart 
        options={ChartOptions}
        containerProps={containerProps}
      />
  );
}