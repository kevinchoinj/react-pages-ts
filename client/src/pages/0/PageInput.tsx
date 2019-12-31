import React from "react";
import styled from 'styled-components';
import {menuValues} from 'data/menuData';
import {history} from 'store'

const StyledSelect = styled.select`
  font-family: 'Architects Daughter';
  padding: .4rem;
  outline: none;
  border: 2px solid #ddd;
  color: #ddd;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  background-color: transparent;
  option {
    background: #222;
  }
`;

const PAGE_SIZE = 8;
const pageCount = Math.ceil(menuValues.length / PAGE_SIZE);
const createArray = (pageCount: number) => {
  let arr = [];
  for(var i = 1; i <= pageCount; i++){
    arr.push(i);
  }
  return arr;
}
type PageInputProps = { 
  pageId: number,
 };

const PageInput: React.FC<PageInputProps> = ({pageId}) => {
  return (
    <form>
      <StyledSelect
        value={pageId}
        onChange={(e) => history.push(`/${e.target.value}`)}
      >
        {createArray(pageCount).map((val) => (
          <option value={val} key={val}>{val}</option>
        ))}
      </StyledSelect>
    </form>
  )
}

export default PageInput;