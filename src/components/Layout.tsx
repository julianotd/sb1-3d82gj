import React from 'react';
import { Wrench, Users, Calendar, Car, ClipboardList } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Wrench className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">AutoCare Pro</span>
            </div>
            <div className="flex space-x-4">
              <NavItem icon={<Users />} text="Customers" />
              <NavItem icon={<Car />} text="Vehicles" />
              <NavItem icon={<Calendar />} text="Schedule" />
              <NavItem icon={<ClipboardList />} text="Services" />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

function NavItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors">
      {icon}
      <span>{text}</span>
    </button>
  );
}