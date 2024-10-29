import React from 'react';
import { Clock } from 'lucide-react';

interface ServiceStageCardProps {
  customer: string;
  vehicle: string;
  stage: string;
  timeRemaining: string;
}

export function ServiceStageCard({
  customer,
  vehicle,
  stage,
  timeRemaining,
}: ServiceStageCardProps) {
  const getStageColor = (stage: string) => {
    const colors = {
      reception: 'bg-blue-100 text-blue-800',
      assessment: 'bg-yellow-100 text-yellow-800',
      start: 'bg-purple-100 text-purple-800',
      repair: 'bg-orange-100 text-orange-800',
      'paint-prep': 'bg-indigo-100 text-indigo-800',
      painting: 'bg-red-100 text-red-800',
      finishing: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
    };
    return colors[stage as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{customer}</h3>
          <p className="text-sm text-gray-500">{vehicle}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${getStageColor(
            stage
          )}`}
        >
          {stage.replace('-', ' ').toUpperCase()}
        </span>
      </div>
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        <span>Est. time remaining: {timeRemaining}</span>
      </div>
    </div>
  );
}