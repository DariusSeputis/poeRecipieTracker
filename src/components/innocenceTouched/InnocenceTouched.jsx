import React from 'react';
import LunarisTouched from '../lunarisTouched/LunarisTouched';
import RecipieOneStep from '../recipieOneStep/RecipieOneStep';
import {
  StyledCompWrap,
  StyledRecWrap,
  StyledResultItemFiveStep,
  StyledResultItemFiveStepWrap,
  StyledResultWrap,
} from '../recipieOneStep/RecipieOneStep.styled';
import SolarisTouched from '../solarisTouched/SolarisTouched';

const InnocenceTouched = () => {
  const handleClick = (e) => {
    if (e.target.className === 'red') {
      e.target.className = 'green';
    } else {
      e.target.className = 'red';
    }
  };
  return (
    <div>
      <StyledCompWrap>
        <StyledRecWrap>
          <LunarisTouched />
          <SolarisTouched />
          <RecipieOneStep
            recItems={['Echoist', 'Soul Conduit']}
            result={'Mirror Image'}
          />
          <RecipieOneStep
            recItems={['Dynamo', 'Consecrator']}
            result={'Mana Siphoner'}
          />
        </StyledRecWrap>
        <StyledResultItemFiveStepWrap>
          <StyledResultItemFiveStep>
            <span className='red' onClick={(e) => handleClick(e)}>
              Innocence-touched
            </span>
          </StyledResultItemFiveStep>
        </StyledResultItemFiveStepWrap>
      </StyledCompWrap>
    </div>
  );
};

export default InnocenceTouched;
