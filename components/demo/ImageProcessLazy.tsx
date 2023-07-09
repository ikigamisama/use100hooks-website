import { useImageProgressLazy } from "use100hooks";
import Image from "next/image";

const ImageProcessLazy = () => {
  const { isLoading, progress } = useImageProgressLazy("/mainlogo-light.png");

  return (
    <div>
      {isLoading ? (
        <div>Loading... {progress}%</div>
      ) : (
        <Image src="/mainlogo-light.png" alt="image" width={75} height={75} />
      )}
    </div>
  );
};
export default ImageProcessLazy;
