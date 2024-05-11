import { Button } from "./components/ui/button";
import { fakeProductList } from "./lib/fakeData";

function App() {
  // ** Responsive => Mobile first
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {fakeProductList.map((product) => (
          <div
            key={product.id}
            className="space-y-3 rounded-lg border p-3 duration-500"
          >
            <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />

            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <div>
              <span>🟢</span>
              <span>🟢</span>
              <span>🟢</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>500,000</span>
              <span>Cars</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Button className="flex-1">Edit</Button>
              <Button className="flex-1" variant={"destructive"}>
                Destroy
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
