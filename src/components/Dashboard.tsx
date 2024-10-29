import React from 'react';
import { Activity, Users, Car, Calendar } from 'lucide-react';
import { ServiceStageCard } from './ServiceStageCard';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Workshop Dashboard</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          New Service Request
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Activity className="h-6 w-6 text-blue-500" />}
          title="Active Services"
          value="12"
        />
        <StatCard
          icon={<Users className="h-6 w-6 text-green-500" />}
          title="Total Customers"
          value="156"
        />
        <StatCard
          icon={<Car className="h-6 w-6 text-purple-500" />}
          title="Vehicles Registered"
          value="203"
        />
        <StatCard
          icon={<Calendar className="h-6 w-6 text-red-500" />}
          title="Scheduled Today"
          value="5"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Active Services</h2>
          <div className="space-y-4">
            <ServiceStageCard
              customer="John Doe"
              vehicle="Toyota Camry"
              stage="paint-prep"
              timeRemaining="2 hours"
            />
            <ServiceStageCard
              customer="Jane Smith"
              vehicle="Honda Civic"
              stage="repair"
              timeRemaining="4 hours"
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {/* Add appointment cards here */}
          </div>
        </section>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}