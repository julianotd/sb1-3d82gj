import React from 'react';
import { Car, Calendar, Palette, Hash } from 'lucide-react';

export function VehicleList() {
  // Mock data - replace with actual vehicle data from context
  const vehicles = [
    {
      id: '1',
      customerId: '1',
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      licensePlate: 'ABC123',
      color: 'Silver',
      vin: '1HGCM82633A123456',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <Car className="h-6 w-6 text-indigo-600" />
        Vehicle List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {vehicle.make} {vehicle.model}
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {vehicle.licensePlate}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Year: {vehicle.year}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Color: {vehicle.color}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Hash className="h-4 w-4" />
                VIN: {vehicle.vin}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}