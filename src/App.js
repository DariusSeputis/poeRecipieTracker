import InnocenceTouched from './components/innocenceTouched/InnocenceTouched';
import KitavaTouched from './components/kitavaTouched/KitavaTouched';
import RecipieOneStep from './components/recipieOneStep/RecipieOneStep';
import RecipieTwoStep from './components/recipieTwoStep/RecipieTwoStep';

function App() {
  return (
    <>
      <h2>Treant Horde</h2>
      <RecipieOneStep
        recItems={['Toxic', 'Sentinel', 'Steel-infused']}
        result={'Treant Horde'}
      />
      <h2>Brine King-touched</h2>
      <RecipieTwoStep
        recipies={[
          {
            recItems: ['Permafrost', 'Sentinel'],
            result: 'Ice Prison',
          },

          {
            recItems: ['Storm Weaver', 'Hasted'],
            result: 'Storm Srider',
          },
          {
            recItems: ['Dynamo', 'Arcane Buffer'],
            result: 'Heralding Minions',
          },
        ]}
        secondStepResult={'Brine King-touched'}
      />
      <h2>Kitava-touched</h2>
      <KitavaTouched />
      <h2>Innocence-touched</h2>
      <InnocenceTouched />
    </>
  );
}

export default App;
