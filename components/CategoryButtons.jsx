import { categories } from "@/db/data";
import Link from "next/link";

const CategoryButtons = ({ categoryName }) => {
  return (
    <div class="w-full flex items-center justify-between lg:flex-col lg:items-start lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/category/${category}`}
          class={`${
            categoryName === category && "border-b"
          } hover:border-b border-black block h-6 box-border mt-4`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryButtons;
