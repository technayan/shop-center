import ProductDetailsImages from "@/components/ProductDetailsImages";
import ProductDetailsInfo from "@/components/ProductDetailsInfo";
import { products } from "@/db/data";

const ProductDetailsPage = ({ params }) => {
  const { id } = params;

  const product = products.find((product) => product.id === id * 1);

  return (
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <ProductDetailsImages product={product} />

        <ProductDetailsInfo product={product} />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
