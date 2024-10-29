import React from 'react';
import { useCustomer } from '../context/CustomerContext';
import { User, Phone, Mail, MapPin, Building2, UserSquare2 } from 'lucide-react';

export function CustomerList() {
  const { customers } = useCustomer();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <User className="h-6 w-6 text-indigo-600" />
        Customer List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                {customer.type === 'company' ? (
                  <Building2 className="h-5 w-5 text-gray-500" />
                ) : (
                  <UserSquare2 className="h-5 w-5 text-gray-500" />
                )}
                <h3 className="text-lg font-medium text-gray-900">{customer.fullName}</h3>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {customer.type.charAt(0).toUpperCase() + customer.type.slice(1)}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {customer.phone}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {customer.email}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {customer.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}