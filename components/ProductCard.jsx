import { getDiscountedPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const discountedPrice = getDiscountedPrice(
    product?.price,
    product?.discountPercentage
  );
  return (
    <div>
      <Link href={`/products/${product?.id}`}>
        <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          <Image
            src={product?.thumbnail}
            width={270}
            height={310}
            alt={product?.title}
          />
        </div>
        <h2 className="text-sm lg:text-base mt-2 font-bold">
          {product?.title}{" "}
        </h2>
      </Link>
      <span className="text-[#919090] inline-block my-2">
        <Link href={`/category/${product?.category}`}>
          ({product?.category})
        </Link>
      </span>
      <Link href={`/products/${product?.id}`}>
        <p className="text-[#919090] text-sm ">{product?.description}</p>

        <p className="text-rose-600 text-sm mt-4">
          <span className="text-[#919090] line-through">${product?.price}</span>{" "}
          ${discountedPrice}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
