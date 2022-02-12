import React from 'react';
import RecipieOneStep from '../recipieOneStep/RecipieOneStep';
import {
  StyledCompWrap,
  StyledRecWrap,
  StyledResultItem,
  StyledResultThreeStepWrap,
} from '../recipieOneStep/RecipieOneStep.styled';
import RecipieTwoStep from '../recipieTwoStep/RecipieTwoStep';

const SolarisTouched = () => {
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
        <div>
          <RecipieOneStep
            recItems={['Sentinel', 'Juggernaut', 'Consecrator']}
            result={'Invulnerable'}
          />
        </div>
        <div>
          <RecipieOneStep
            recItems={['Incendiery', 'Bonebreaker']}
            result={'Magma Barrier'}
          />
        </div>
        <div>
          <RecipieTwoStep
            recipies={[
              {
                recItems: ['Bombadier', 'Overcharged'],
                result: 'Necromancer',
              },
              {
                recItems: ['Frenzied', 'Berserker'],
                result: 'Executionew',
              },
              {
                recItems: [''],
                result: 'Gargantuan',
              },
            ]}
            secondStepResult={'Empowering Minions'}
          />
        </div>
      </StyledRecWrap>

      <StyledResultThreeStepWrap>
        <StyledResultItem>
          <span className='red' onClick={(e) => handleClick(e)}>
            Solaris-touched
          </span>
        </StyledResultItem>
      </StyledResultThreeStepWrap>
    </StyledCompWrap>
  );
};

export default SolarisTouched;
