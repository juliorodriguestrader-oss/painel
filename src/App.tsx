import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { BotTable } from './components/BotTable';
import { SuccessAlert } from './components/SuccessAlert';

export default function App() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />
      
      <main className="flex-1 ml-64 min-h-screen relative">
        <Header />
        
        <div className="p-8 space-y-8">
          {showAlert && (
            <SuccessAlert 
              message="Licença atrelada à conta 103967723 com sucesso!" 
              onClose={() => setShowAlert(false)} 
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard 
              label="Licenças Ativas" 
              value={2} 
              trend="+50% este mês" 
              type="active" 
            />
            <MetricCard 
              label="Vencidas (Expirou Plano)" 
              value={0} 
              type="expired" 
            />
            <MetricCard 
              label="Bloqueios Manuais" 
              value={0} 
              type="blocked" 
            />
          </div>

          <BotTable />
        </div>
      </main>
    </div>
  );
}
