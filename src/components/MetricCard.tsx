import React from 'react';
import { Clock, Ban } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: number;
  trend?: string;
  type?: 'active' | 'expired' | 'blocked';
}

export function MetricCard({ label, value, trend, type = 'active' }: MetricCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10 group hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <p className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">{label}</p>
        {type === 'active' && (
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(0,108,73,0.6)]"></div>
        )}
        {type === 'expired' && (
          <Clock className="h-4 w-4 text-orange-400" />
        )}
        {type === 'blocked' && (
          <Ban className="h-4 w-4 text-red-500" />
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-5xl font-black text-primary font-headline">{value}</h3>
        {trend && (
          <span className="text-secondary text-xs font-semibold">{trend}</span>
        )}
      </div>
    </div>
  );
}
