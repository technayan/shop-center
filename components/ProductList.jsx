import { products } from "@/db/data";
import ProductCard from "./ProductCard";

const ProductList = ({ categoryName = null }) => {
  let productList;
  if (!categoryName) {
    productList = products;
  } else {
    productList = products.filter(
      (product) => product?.category === categoryName
    );
  }
  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductList;
