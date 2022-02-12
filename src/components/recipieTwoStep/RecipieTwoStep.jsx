import React from 'react';
import RecipieOneStep from '../recipieOneStep/RecipieOneStep';
import {
  StyledCompTwoStepWrap,
  StyledResultTwoStepWrap,
} from '../recipieOneStep/RecipieOneStep.styled';

const RecipieTwoStep = ({ recipies, secondStepResult }) => {
  const handleClick = (e) => {
    if (e.target.className === 'red') {
      e.target.className = 'green';
    } else {
      e.target.className = 'red';
    }
  };

  return (
    <StyledCompTwoStepWrap>
      <div>
        {recipies.map((recipie, index) => (
          <RecipieOneStep
            key={index}
            recItems={recipie.recItems}
            result={recipie.result}
          />
        ))}
      </div>
      <StyledResultTwoStepWrap>
        <span className='red' onClick={(e) => handleClick(e)}>
          {secondStepResult}
        </span>
      </StyledResultTwoStepWrap>
    </StyledCompTwoStepWrap>
  );
};

export default RecipieTwoStep;
