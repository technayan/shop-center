import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Hero heroText={true} />
      <ProductList />
      <Newsletter />
    </>
  );
}
