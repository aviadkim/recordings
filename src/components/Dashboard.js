import React from 'react';

const Dashboard = ({ client }) => {
  if (!client) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl text-gray-600">בחר לקוח להצגת המידע</h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Client Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">סקירת לקוח</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-gray-500">שם</div>
            <div className="font-medium">{client.name}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">פגישה אחרונה</div>
            <div className="font-medium">15/01/2024</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">משימות פתוחות</div>
            <div className="font-medium">3</div>
          </div>
        </div>
      </div>

      {/* Recent Meetings */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">פגישות אחרונות</h2>
        <div className="space-y-4">
          {[
            { date: '15/01/2024', type: 'עדכון צרכים', summary: 'סקירת תיק ועדכון מדיניות השקעה' },
            { date: '01/12/2023', type: 'פגישת מעקב', summary: 'דיון בביצועי התיק' }
          ].map((meeting, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between">
                <div className="font-medium">{meeting.date}</div>
                <div className="text-blue-600">{meeting.type}</div>
              </div>
              <div className="text-sm text-gray-600 mt-1">{meeting.summary}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">משימות לביצוע</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
            <div className="mr-2">
              <div className="font-medium">עדכון טופס צרכים</div>
              <div className="text-sm text-gray-500">לסיום עד: 01/02/2024</div>
            </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
            <div className="mr-2">
              <div className="font-medium">שליחת סיכום פגישה</div>
              <div className="text-sm text-gray-500">לסיום עד: 20/01/2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;