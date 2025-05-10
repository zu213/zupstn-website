import './Charts.css';
import moment from 'moment';
import { useState } from 'react';

import {benchData, deadliftData, squatData} from './chartData.js';

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const formatXAxis = (tickFormat) => {
  return moment.unix(tickFormat).format('DD/MM/YYYY');
};


function Charts() {
  var [data, setData] = useState(deadliftData);

  return (
    <div>
      <div className='tooSmallCharts'>
            Page width is too small to display graphs please try
             rotating if on phone or expanding window if on computer
      </div>
      <div className='chartContainer'>
        <div>
          <br />
          <div className='chartIntro'>
                Graphs showing my ORM(one rep max) on each day I recorded data.
          </div>
          <div >
            <div className="inlineButton">
              <button  onClick={() => setData(deadliftData)}>Deadlift data</button>
            </div>
            <div className="inlineButton">
              <button  onClick={() => setData(squatData)}>Squat data</button>
            </div>
            <div className="inlineButton" >
              <button onClick={() => setData(benchData)}>Bench data</button>
            </div>
          </div>
        </div>
        <br></br>

        <div className="chart">
          <div>
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart data={data} margin={{ right: 30 }}>
                <CartesianGrid fill='white'></CartesianGrid>
                <XAxis 
                  dataKey="date"
                  tick={{ fill: 'white' }}
                  tickFormatter={(tick) => formatXAxis(tick)}
                  type="number"
                  domain={['auto','auto']}/>
                <YAxis
                  tick={{ fill: 'white' }}
                  domain={['auto','auto']}/>
                <Legend align='center' />
                <Tooltip />
                <Line
                  dataKey="ORM"
                  stroke="red"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;