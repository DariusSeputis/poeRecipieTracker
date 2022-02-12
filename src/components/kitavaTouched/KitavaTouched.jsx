import React from 'react';
import RecipieOneStep from '../recipieOneStep/RecipieOneStep';
import {
  StyledCompWrap,
  StyledResultItemFiveStepWrap,
  StyledResultWrap,
} from '../recipieOneStep/RecipieOneStep.styled';
import RecipieTwoStep from '../recipieTwoStep/RecipieTwoStep';
import { StyledResultWrapKitava } from './KitavaTouched.styled';

const KitavaTouched = () => {
  const handleClick = (e) => {
    if (e.target.className === 'red') {
      e.target.className = 'green';
    } else {
      e.target.className = 'red';
    }
  };
  return (
    <StyledCompWrap>
      <div>
        <div>
          <RecipieTwoStep
            recipies={[
              {
                recItems: ['Flameweaver', 'Haster'],
                result: 'Flame Strider',
              },
              {
                recItems: [''],
                result: 'Frenzied',
              },
              {
                recItems: ['Gargantuan', 'Vampiric'],
                result: 'Rejuvenating',
              },
            ]}
            secondStepResult={'Abberath-touched'}
          />
        </div>
        <div>
          <RecipieOneStep
            recItems={['Bloodletter', 'Chaosweaver']}
            result={'Corrupter'}
          />
        </div>
        <div>
          <RecipieTwoStep
            recipies={[
              {
                recItems: [''],
                result: 'Bonebreaker',
              },
              {
                recItems: ['Frenzied', 'Berserker'],
                result: 'Executioner',
              },
              {
                recItems: ['Incendiary', 'BoneBreaker'],
                result: 'Magma Barrier',
              },
            ]}
            secondStepResult={'Tukohama-touched'}
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
                recItems: [''],
                result: 'Incendiary',
              },
            ]}
            secondStepResult={'Corpse Detonator'}
          />
        </div>
      </div>
      <StyledResultItemFiveStepWrap>
        <StyledResultWrapKitava>
          <span className='red' onClick={(e) => handleClick(e)}>
            Kitava-touched
          </span>
        </StyledResultWrapKitava>
      </StyledResultItemFiveStepWrap>
    </StyledCompWrap>
  );
};

export default KitavaTouched;
