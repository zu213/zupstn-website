import './Charts.css';
import moment from "moment";

import {data} from './chartData.js'

import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
  } from "recharts";

const formatXAxis = (tickFormat) => {
    return moment.unix(tickFormat).format("DD/MM/YYYY");
};

function Charts() {

    return (
      <div>
        Page under development !!!
        <div class="chart">
            <div id="deadlift">
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
                        <Legend />
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
    )
  }

export default Charts;