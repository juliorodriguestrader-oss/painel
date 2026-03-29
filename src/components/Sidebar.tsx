import React from 'react';
import { 
  LayoutDashboard, 
  Bot, 
  ShieldCheck, 
  Store, 
  Activity, 
  Plus, 
  HelpCircle, 
  BookOpen 
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Bot, label: 'Trading Bots' },
  { icon: ShieldCheck, label: 'License Manager' },
  { icon: Store, label: 'Marketplace' },
  { icon: Activity, label: 'System Health' },
];

export function Sidebar() {
  return (
    <aside className="bg-primary flex flex-col h-screen w-64 fixed left-0 top-0 z-40 text-white">
      <div className="px-6 py-8">
        <h2 className="text-secondary font-bold text-lg font-headline tracking-tight">Command Center</h2>
        <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest mt-1">MT5 Automated Trading</p>
      </div>
      
      <nav className="flex-1 space-y-1 px-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-150 group ${
              item.active 
                ? 'bg-secondary text-white' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className={`mr-3 h-5 w-5 ${item.active ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
            <span className="font-medium text-sm">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="px-4 mb-6">
        <button className="w-full bg-secondary hover:bg-opacity-90 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-secondary/20">
          <Plus className="h-4 w-4" />
          Add Client
        </button>
      </div>

      <div className="border-t border-slate-800 pt-4 pb-6 space-y-1 px-2">
        <a href="#" className="text-slate-400 hover:text-white px-4 py-2 flex items-center transition-colors text-sm">
          <HelpCircle className="mr-3 h-4 w-4" />
          Support
        </a>
        <a href="#" className="text-slate-400 hover:text-white px-4 py-2 flex items-center transition-colors text-sm">
          <BookOpen className="mr-3 h-4 w-4" />
          Documentation
        </a>
      </div>
    </aside>
  );
}
