
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Month 1', organic: 1200 },
  { name: 'Month 2', organic: 1800 },
  { name: 'Month 3', organic: 3200 },
  { name: 'Month 4', organic: 4500 },
  { name: 'Month 5', organic: 7200 },
  { name: 'Month 6', organic: 9800 },
];

export const SEOGrowthChart = () => (
  <div className="h-64 w-full bg-white p-4 rounded-xl shadow-sm">
    <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Organic Traffic Growth Simulation</h4>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        />
        <Area 
          type="monotone" 
          dataKey="organic" 
          stroke="#3b82f6" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorOrganic)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);
