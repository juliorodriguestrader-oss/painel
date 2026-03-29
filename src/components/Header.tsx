import React from 'react';
import { Search, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-primary text-white shadow-2xl shadow-black/20 sticky top-0 z-50 flex justify-between items-center w-full px-6 h-16">
      <div className="flex items-center gap-8">
        <span className="text-xl font-black text-white tracking-widest uppercase font-headline">Precision Architect</span>
        <div className="hidden md:flex items-center bg-white/10 rounded-xl px-3 py-1.5 focus-within:bg-white/15 transition-all">
          <Search className="text-slate-400 h-4 w-4 mr-2" />
          <input 
            className="bg-transparent border-none focus:outline-none text-xs w-48 placeholder-slate-400" 
            placeholder="Search accounts..." 
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a className="text-white border-b-2 border-secondary pb-1" href="#">Dashboard</a>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Analytics</a>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Logs</a>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Settings</a>
        </div>
        
        <div className="h-6 w-px bg-slate-700"></div>
        
        <div className="flex items-center gap-4">
          <button className="text-slate-300 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold leading-none">Olá, Julio!</p>
              <p className="text-[10px] text-slate-400 font-medium">Administrator</p>
            </div>
            <img 
              alt="User Profile" 
              className="w-8 h-8 rounded-full bg-slate-800 ring-2 ring-secondary/30" 
              src="https://picsum.photos/seed/julio/100/100"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <button className="text-xs text-slate-400 hover:text-red-500 transition-colors uppercase font-bold tracking-wider">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
