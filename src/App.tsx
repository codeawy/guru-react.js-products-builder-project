import ProductCardList from "./components/ProductCardList";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="container">
      <ProductCardList />
      <Toaster />
    </div>
  );
}

export default App;
