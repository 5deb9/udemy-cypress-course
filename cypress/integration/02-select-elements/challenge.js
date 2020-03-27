// ⚠️ before you start this challenge, please create at least one todo item

it('gets element on page', () => {

  cy
    .visit('localhost:3000');

  // 👶 challenge #1: select a todo element using tag "li" (list item)
  cy
    .get('');
  
  // 👦 challenge #2: select a todo element using class
  cy
    .get('');

  // 👨 challenge #3: select checkbox inside todo element by using class
  cy
    .get('');

  // 🤓 challenge #4: select checkbox inside todo element by using "checkbox" attribute
  cy
    .get('');

  // 🦸‍♂️ challenge #5: select a todo element by relation (complete selector, don’t delete "ul")
  cy
    .get('ul');
   
});