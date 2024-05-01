import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
/* import RemoveProductButton from './components/RemoveProductButton'; */
import React, {/* useState */} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EstiloGlobal } from './global';

function App() {

  /* const [productIdToRemove, setProductIdToRemove] = useState(null); */

  // Função para atualizar o estado do ID do produto
  /* const handleProductSelection = (productId) => {
    setProductIdToRemove(productId);
  }; */

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <EstiloGlobal></EstiloGlobal>
        <h1>Gerenciador de Produtos</h1>
          <AddProductForm />
          <ProductList /* onProductSelect={handleProductSelection} *//>
          {/* <RemoveProductButton productId={productIdToRemove}/> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
