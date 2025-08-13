import './Charts.css';
import { useState, useEffect } from 'react';

import moment from 'moment';
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


async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const dataObj = {};
    for (const [key, value] of Object.entries(json)) {
      dataObj[key] = value.map(unProcessedData => ({ ...unProcessedData, date: moment(new Date(unProcessedData.date)).unix(), }));
    }
    return dataObj;
    
  } catch (error) {
    console.error(error.message);
  }
}

function Charts() {
  var [allData, setAllData] = useState(null);
  var [data, setData] = useState(null);

  useEffect(() => {
    const graphEndpoint = 'https://zu213-backend.vercel.app/api/graph';
    fetchData(graphEndpoint).then(data => {
      setAllData(data);
      document.querySelector('.spinner')?.classList.add('chartLoaded');
      setData(data?.deadlift);
    });
  }, []);

  return (
    <div className='charts'>
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
              <button  onClick={() => setData(allData?.deadlift)}>Deadlift data</button>
            </div>
            <div className="inlineButton">
              <button  onClick={() => setData(allData?.squat)}>Squat data</button>
            </div>
            <div className="inlineButton" >
              <button onClick={() => setData(allData?.bench)}>Bench data</button>
            </div>
          </div>
        </div>
        <br></br>

        <div className="chart">
          <span className="spinner"></span>
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