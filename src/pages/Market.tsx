import Nav from "../components/market/Nav";
import ProductCard from "../components/market/ProductCard";
import { products } from "../db/products";
import Footer from "../components/Footer";
// import { getUser } from "../utils/user/getUser";

function Market() {
  // console.log(getUser());
  return (
    <div>
      <Nav />

      <main className="py-10 px-20">
        <div>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5  gap-y-8">
              {products.cars.map((product, index) => {
                return (
                  <ProductCard
                    image={product.image}
                    price={product.price}
                    name={product.name}
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Gadgets</h2>
            <div className="flex gap-4">
              {products.gadgets.map((product, index) => {
                return (
                  <ProductCard
                    image={product.image}
                    price={product.price}
                    name={product.name}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Market;
