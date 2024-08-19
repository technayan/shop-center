import { getDiscountedPrice } from "@/utils";
import Image from "next/image";

const ProductDetailsInfo = ({ product }) => {
  const ratingStar = Math.floor(product?.rating);

  const stars = Array(ratingStar).fill(0);

  const discountedPrice = getDiscountedPrice(
    product?.price,
    product?.discountPercentage
  );
  return (
    <div className="w-full lg:w-5/12">
      <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
        {product?.title}
      </h1>
      <span className="text-[#919090] my-3">{product?.category}</span>
      <div className="mt-3 flex items-center justify-start gap-1">
        {stars.map((star) => (
          <Image
            key={star}
            src={"/svg/star.svg"}
            width={20}
            height={20}
            alt="star"
          />
        ))}
      </div>
      <hr className="my-5 bg-black" />

      <div>
        <p className="my-3">
          <span className="text-rose-600 opacity-60 line-through">
            ${product?.price}
          </span>{" "}
          <span className="font-bold text-2xl">${discountedPrice}</span>
        </p>
      </div>
      <div>
        <p className="leading-7">{product?.description}</p>

        <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
          Add To Cart - ${discountedPrice}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
