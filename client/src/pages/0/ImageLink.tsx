import React from 'react';
import styled from 'styled-components';

type ImageProps = {
  altText?: string,
  className?: string,
  src: string,
};

const Image: React.FC<ImageProps> = ({
  altText,
  className,
  src
}) => (
  <img
    src={src}
    alt={altText}
    className={className}
    loading="lazy"
  />
);

const StyledLink = styled(Image)`
  height: 100%;
  box-shadow: 5px 8px 13.92px 2.08px rgba(255,255,255,.03);
  @media screen and (max-width: 768px) {
    box-shadow: none;
  }
`;

type ImageLinkProps = { 
  altText?: string,
  imageSrc: string,
 };

const ImageLink: React.FC<ImageLinkProps> = ({
  imageSrc,
  altText,
}) => {
  return(
    <StyledLink
      altText={altText}
      src={imageSrc}
    />
  );
};

export default ImageLink;