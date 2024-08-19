import CategoryButtons from "@/components/CategoryButtons";
import Hero from "@/components/Hero";
import { products } from "@/db/data";
import { getDiscountedPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = ({ params }) => {
  const { categoryName } = params;

  let productList;

  if (categoryName === "all") {
    productList = products;
  } else {
    productList = products.filter(
      (product) => product?.category === categoryName
    );
  }

  return (
    <>
      <Hero />

      <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <CategoryButtons categoryName={categoryName} />

        <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {/* product */}

          {productList.map((product) => (
            <div key={product?.id}>
              <Link href={`/products/${product?.id}`}>
                <div class="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
                  <Image
                    src={product?.thumbnail}
                    width={300}
                    height={310}
                    alt={product?.title}
                  />
                </div>

                <h2 class="text-sm lg:text-base mt-2 font-bold">
                  {product?.title}
                </h2>
              </Link>

              <span class="text-[#919090]">
                <Link href={`/category/${product?.category}`}>
                  ({product?.category})
                </Link>
              </span>
              <Link href={`/products/${product?.id}`}>
                <p class="text-[#919090] text-sm ">{product?.description}</p>

                <p class="text-rose-600 text-sm mt-4">
                  <span class="text-[#919090] line-through">
                    ${product?.price}
                  </span>{" "}
                  $
                  {getDiscountedPrice(
                    product?.price,
                    product?.discountPercentage
                  )}
                </p>
              </Link>
            </div>
          ))}
          {/* product */}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
