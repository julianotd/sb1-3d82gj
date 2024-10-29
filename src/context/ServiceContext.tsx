import React, { createContext, useContext, useState } from 'react';
import type { ServiceRequest, ServiceStage } from '../types';

interface ServiceContextType {
  services: ServiceRequest[];
  stages: ServiceStage[];
  addService: (service: ServiceRequest) => void;
  updateService: (id: string, service: ServiceRequest) => void;
  addStage: (stage: ServiceStage) => void;
  getServiceStages: (serviceId: string) => ServiceStage[];
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export function ServiceProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<ServiceRequest[]>([]);
  const [stages, setStages] = useState<ServiceStage[]>([]);

  const addService = (service: ServiceRequest) => {
    setServices([...services, service]);
  };

  const updateService = (id: string, service: ServiceRequest) => {
    setServices(services.map((s) => (s.id === id ? service : s)));
  };

  const addStage = (stage: ServiceStage) => {
    setStages([...stages, stage]);
  };

  const getServiceStages = (serviceId: string) => {
    return stages.filter((stage) => stage.serviceRequestId === serviceId);
  };

  return (
    <ServiceContext.Provider
      value={{
        services,
        stages,
        addService,
        updateService,
        addStage,
        getServiceStages,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
}