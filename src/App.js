import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MeetingRecorder from './components/MeetingRecorder';
import ClientList from './components/ClientList';

function App() {
  const [selectedView, setSelectedView] = useState('dashboard');
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex" dir="rtl">
      <Sidebar 
        selectedView={selectedView} 
        onViewChange={setSelectedView}
        selectedClient={selectedClient}
        onClientSelect={setSelectedClient}
      />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {selectedView === 'dashboard' && <Dashboard client={selectedClient} />}
          {selectedView === 'recording' && <MeetingRecorder client={selectedClient} />}
          {selectedView === 'clients' && <ClientList onClientSelect={setSelectedClient} />}
        </div>
      </main>
    </div>
  );
}

export default App;