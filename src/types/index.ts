export interface Customer {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  idNumber: string;
  type: 'personal' | 'company';
}

export interface Vehicle {
  id: string;
  customerId: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  color: string;
  vin: string;
}

export interface ServiceRequest {
  id: string;
  vehicleId: string;
  customerId: string;
  serviceType: ('painting' | 'bodywork')[];
  preferredDate: string;
  preferredTime: string;
  description: string;
  photos: string[];
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed';
}

export interface ServiceStage {
  id: string;
  serviceRequestId: string;
  stage: 'reception' | 'assessment' | 'start' | 'repair' | 'paint-prep' | 'painting' | 'finishing' | 'completed';
  timestamp: string;
  notes: string;
}