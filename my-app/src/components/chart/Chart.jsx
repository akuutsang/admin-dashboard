import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {

  const data = [
    {
      name: 'Jan',
      "Active user": 4000,
    },
    {
      name: 'Feb',
      "Active user": 2000,
    },{
      name: 'Mar',
      "Active user": 1000,
    },{
      name: 'April',
      "Active user": 2000,
    },{
      name: 'May',
      "Active user": 3000,
    },{
      name: 'Jun',
      "Active user": 4000,
    },{
      name: 'Jul',
      "Active user": 3000,
    },{
      name: 'Aug',
      "Active user": 2000,
    },{
      name: 'Sep',
      "Active user": 4000,
    },{
      name: 'Oct',
      "Active user": 1000,
    },{
      name: 'Nov',
      "Active user": 1000,
    },{
      name: 'Dec',
      "Active user": 2000,
    }
  ];
  
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} >
        <LineChart data={data}>
          <XAxis dataKey="name"stroke="#5550bd"/>
          <YAxis/>
          <Line type="monotone" dataKey="Active user" stroke="#5550bd"/>
          <Tooltip/>
          <CartesianGrid stroke="#D3D3D3" strokeDasharray="5 5"/>
          <Legend/>
          

        </LineChart>

      </ResponsiveContainer>
    </div>
  );
}
