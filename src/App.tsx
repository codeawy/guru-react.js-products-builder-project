import { fakeProductList } from "./lib/fakeData";

function App() {
  // ** Responsive => Mobile first
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {fakeProductList.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer rounded-lg border p-3 duration-500 hover:bg-purple-500 hover:text-white"
          >
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
