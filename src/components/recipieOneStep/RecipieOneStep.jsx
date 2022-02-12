import React, { useState } from 'react';
import {
  StyledCompWrap,
  StyledRecItem,
  StyledRecWrap,
  StyledResultWrap,
} from './RecipieOneStep.styled';

const RecipieOneStep = ({ recItems, result }) => {
  const handleClick = (e) => {
    if (e.target.className === 'red') {
      e.target.className = 'green';
    } else {
      e.target.className = 'red';
    }
  };
  return (
    <StyledCompWrap>
      <StyledRecWrap>
        {recItems.map((item, index) => (
          <StyledRecItem key={index}>
            <span className='red' onClick={(e) => handleClick(e)}>
              {item}
            </span>
          </StyledRecItem>
        ))}
      </StyledRecWrap>
      <StyledResultWrap>
        <span className='red' onClick={(e) => handleClick(e)}>
          {result}
        </span>
      </StyledResultWrap>
    </StyledCompWrap>
  );
};

export default RecipieOneStep;
