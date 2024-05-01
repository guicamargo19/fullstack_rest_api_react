import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EstiloGlobal } from './global';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <EstiloGlobal></EstiloGlobal>
        <h1>Gerenciador de Produtos</h1>
          <AddProductForm />
          <ProductList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
