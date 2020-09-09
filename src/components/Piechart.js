import React from 'react';
import Doughnut from 'react-chartjs-2';
import Chart from 'chart.js';

function Pie(){
    return(
        <div>
          <canvas id="myChart" width="400" height="150"></canvas>
          <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
          
        </div>
    )
}

export default Pie;