import Image from "next/image";
import { Suspense } from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const ProductDetailsImages = ({ product }) => {
  const mainImage = product?.images[0];

  return (
    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <Image
          src={mainImage}
          className=" mx-auto object-cover"
          width={400}
          height={500}
          alt={product?.title}
        />
      </Suspense>

      <div className="flex gap-4 mt-4">
        <Suspense fallback={<LoadingSkeleton />}>
          {product?.images.map((imageUrl) => (
            <Image
              key={imageUrl}
              src={imageUrl}
              className="mx-auto border object-cover"
              width={100}
              height={100}
              alt={product?.title}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default ProductDetailsImages;
