import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './chart.css';

const ChartComponent = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#82ca9d" />
  </LineChart>
);

export default ChartComponent;