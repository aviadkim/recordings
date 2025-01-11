import React from 'react';

const Sidebar = ({ selectedView, onViewChange, selectedClient }) => {
  const menuItems = [
    { id: 'dashboard', label: 'לוח בקרה', icon: '📊' },
    { id: 'recording', label: 'הקלטת פגישה', icon: '🎙️' },
    { id: 'clients', label: 'ניהול לקוחות', icon: '👥' }
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      {/* Header */}
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">מערכת פגישות</h1>
        {selectedClient && (
          <div className="mt-2 text-sm text-gray-600">
            לקוח נבחר: {selectedClient.name}
          </div>
        )}
      </div>

      {/* Menu Items */}
      <nav className="p-4">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center space-x-2 p-2 rounded-lg mb-2 text-right ${
              selectedView === item.id 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t mt-auto">
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          פגישה חדשה +
        </button>
      </div>
    </div>
  );
};

export default Sidebar;