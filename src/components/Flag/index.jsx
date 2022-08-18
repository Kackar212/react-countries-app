import { Image, ImageContainer, ImageLoader } from "@components/Flag/style";
import Loader from "@components/Loader";
import { useState } from "react";


export function Flag({ src, name, fit }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ImageContainer fit={fit}>
      {isLoading && (
        <ImageLoader>
          <Loader />
        </ImageLoader>
      )}
      <Image src={src} alt={`Flag of ${name}`} beforeLoad={() => setIsLoading(true)} afterLoad={() => setIsLoading(false)}/>
      {/* <Image src={src} alt={`Flag of ${name}`} onLoadStart={() => setIsLoading(true)} onLoad={() => setIsLoading(false)}/> */}
    </ImageContainer>
  );
}
