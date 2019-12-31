import React, {Suspense, useState, useEffect} from 'react';
import {menuValues} from 'data/menuData';
import {Link} from 'react-router-dom';
import ImageLink from './ImageLink';
import styled from 'styled-components';
import PageInput from './PageInput';

const StyledButtons = styled.div`
  position: fixed;
  top: 6px;
  left: 6px;
  display: flex;
  a {
    text-decoration: none;
  }
`;
const StyledButton = styled.div<{disabled?: boolean}>`
  padding: 6px;
  transition: .2s ease;
  color: ${props => props.disabled ? '#aaa' : '#fff'};
  text-decoration: none;
  font-family: 'Architects Daughter', Helvetica, sans-serif;
  border: 2px solid #ddd;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  box-sizing: border-box;
  margin: 0 3px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    background-color: ${props => !props.disabled && '#444'};
  }
`;
const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  color: #fff;
  min-width: 100vw;
`;
const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #222;
  height: 100vh;
  width: 100vw;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 4rem;
`;
const StyledTitle = styled.div`
  margin-bottom: 14px;
  position: absolute;
  font-size: 1rem;
  font-family: 'Architects Daughter', Helvetica, sans-serif;
  top: -1.5rem;
`;
const StyledImageWrapper = styled.div`
  height: 200px;
  display: inline-block;
  cursor: pointer;
  margin: 1rem;
  position: relative;
  img {
    &:hover {
      transition: .3s ease;
      opacity : .6;
    }
  }
`;
type LinkOrDivProps = { 
  text: string,
  href: any,
 };

const LinkOrDiv: React.FC<LinkOrDivProps> = ({text, href}) => {
  return href ? (
    <Link to={href}>
      <StyledButton>
        {text}
      </StyledButton>
    </Link>
  )
  :
  (
    <StyledButton disabled={true}>
      {text}
    </StyledButton>
  )
}

const paginate = (array: any, page_size: number, page_number: number) => {
  --page_number;
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
};

const PAGE_SIZE = 8;

type IdProps = {
  id: string,
}
type MatchProps = { 
  params: IdProps,
 };
type IndexPageProps = { 
  match: MatchProps,
 };

 interface IDisplayValues {
  text: string,
  link: string,
  imageSrc: string,
 }

const IndexPage: React.FC<IndexPageProps> = ({match}) => {
  const [pageId, setPageId] = useState(1);
  useEffect(() => {
    if (match.params.id) {
      setPageId(parseInt(match.params.id));
    }
    else {
      setPageId(1);
    }
  }, [match]);
  const [displayValues, setDisplayValues] = useState([]);
  useEffect(() => {
    setDisplayValues(paginate(menuValues, PAGE_SIZE, pageId));
  }, [pageId]);
  return(
    <StyledWrapper>
      <StyledBackground/>
      <StyledButtons>
        <LinkOrDiv
          href={pageId >= 2 && `/${pageId - 1}`}
          text='Previous'
        />
        <LinkOrDiv
          href={menuValues.length/(pageId*PAGE_SIZE) >= 1 && `/${pageId + 1}`}
          text='Next'
        />
        <PageInput pageId={pageId}/>
      </StyledButtons>
      <StyledContainer>
        {displayValues.map((value: IDisplayValues)=> (
          <StyledImageWrapper key={value.text}>
            <StyledTitle>
              {value.text}
            </StyledTitle>
            <Link to={value.link}>
              <Suspense fallback={<h1>Still Loading…</h1>}>
                <ImageLink
                  imageSrc = {value.imageSrc}
                />
              </Suspense>
            </Link>
          </StyledImageWrapper>
        ))}
      </StyledContainer>
    </StyledWrapper>
  );
};

export default IndexPage;