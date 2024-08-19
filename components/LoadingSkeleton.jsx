const LoadingSkeleton = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* <Image
        src={"/loading.gif"}
        width={50}
        height={50}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="loading"
      /> */}
      Loading...
    </div>
  );
};

export default LoadingSkeleton;
