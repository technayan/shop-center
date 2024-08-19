import Image from "next/image";

const Hero = ({ heroText = false }) => {
  return (
    <header
      className={`h-[500px] relative overflow-hidden bg-center flex flex-col-reverse bg-cover w-full bg`}
    >
      <Image
        src={"/header.webp"}
        width={3000}
        height={1960}
        alt="test"
        className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {heroText && (
        <div className="mb-5 w-10/12 max-w-7xl text-white mx-auto">
          <h1 className="text-2xl lg:text-3xl">Shop Center</h1>
          <p>Your whole week at a glance</p>
          <button className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
            Get the Weekly Kit
          </button>
        </div>
      )}
    </header>
  );
};

export default Hero;
