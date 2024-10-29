import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { CustomerProvider } from './context/CustomerContext';
import { ServiceProvider } from './context/ServiceContext';

function App() {
  return (
    <CustomerProvider>
      <ServiceProvider>
        <Layout>
          <Dashboard />
        </Layout>
      </ServiceProvider>
    </CustomerProvider>
  );
}

export default App;