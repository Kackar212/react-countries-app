import { Image, ImageContainer, ImageLoader } from '@components/Flag/style';
import Loader from '@components/Loader';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Flag({ src, name }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ImageContainer>
      {isLoading && (
        <ImageLoader>
          <Loader />
        </ImageLoader>
      )}
      <Image
        src={src}
        alt={`Flag of ${name}`}
        beforeLoad={() => setIsLoading(true)}
        afterLoad={() => setIsLoading(false)}
      />
    </ImageContainer>
  );
}

Flag.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};

export default Flag;
