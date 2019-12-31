import React from 'react';
import styled from 'styled-components';

const Image = ({className, src}) => (
  <img src={src} alt="" className={className}/>
);

const StyledLink = styled(Image)`
  height: 100%;
  box-shadow: 5px 8px 13.92px 2.08px rgba(255,255,255,.03);

  @media screen and (max-width: 768px) {
    box-shadow: none;
  }
`;

const ImageLink = ({imageSrc}) => {
  return(
    <StyledLink
      src={imageSrc}
    />
  );
};

export default ImageLink;