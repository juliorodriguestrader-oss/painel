import React from 'react';
import { 
  PauseCircle, 
  Trash2, 
  Edit2, 
  Monitor, 
  ChevronLeft, 
  ChevronRight, 
  UserPlus 
} from 'lucide-react';
import { TradingBot } from '../types';

const bots: TradingBot[] = [
  {
    id: '#10396',
    accountNumber: '103967723',
    accountType: 'MT5 - Hedge Account',
    status: 'active',
    expiryDate: '15 Out 2024',
    expiryDays: 45,
    modifiedAt: 'Ontem às 14:32'
  },
  {
    id: '#10397',
    accountNumber: '998273641',
    accountType: 'MT5 - Netting Account',
    status: 'active',
    expiryDate: '12 Dez 2024',
    expiryDays: 103,
    modifiedAt: 'Hoje às 09:15'
  }
];

export function BotTable() {
  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
      <div className="px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-low/50">
        <div>
          <h2 className="text-lg font-bold text-primary flex items-center gap-2">
            Robôs Distribuídos
            <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
              Clientes MetaTrader 5
            </span>
          </h2>
        </div>
        <button className="bg-secondary text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-secondary/15">
          <UserPlus className="h-4 w-4" />
          Adicionar Cliente
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider border-b border-surface-container-high bg-surface-container-low/30">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Login / Conta MT5</th>
              <th className="px-6 py-4">Status (HostGator)</th>
              <th className="px-6 py-4">Vencimento do Plano</th>
              <th className="px-6 py-4">Modificado Em</th>
              <th className="px-6 py-4 text-right">Ações (Admin)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-high">
            {bots.map((bot) => (
              <tr key={bot.id} className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">{bot.id}</td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Monitor className="text-blue-600 h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{bot.accountNumber}</p>
                      <p className="text-[10px] text-on-surface-variant">{bot.accountType}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-800 uppercase">
                    {bot.status === 'active' ? 'Ativo' : bot.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm font-medium text-on-surface">{bot.expiryDate}</p>
                  <p className="text-[10px] text-secondary font-bold">Em {bot.expiryDays} dias</p>
                </td>
                <td className="px-6 py-5 text-sm text-on-surface-variant">{bot.modifiedAt}</td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="bg-surface-container-low hover:bg-surface-container-high text-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1">
                      <PauseCircle className="h-4 w-4" />
                      Pausar EA
                    </button>
                    <div className="flex items-center gap-1">
                      <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-surface-container-low/20 border-t border-surface-container-high flex justify-between items-center">
        <p className="text-[11px] text-on-surface-variant font-medium">Exibindo {bots.length} de {bots.length} clientes registrados</p>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-lg border border-outline-variant/30 flex items-center justify-center text-slate-300 cursor-not-allowed">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-bold">1</button>
          <button className="w-8 h-8 rounded-lg border border-outline-variant/30 flex items-center justify-center text-slate-300 cursor-not-allowed">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
