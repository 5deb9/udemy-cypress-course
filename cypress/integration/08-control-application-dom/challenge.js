/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

/* 
  👶 challenge #1: continue with the test from video. make 
  the ".destroy" element disappear
*/
it('have delete icon', () => {

  cy
    .get('.destroy')
    .invoke('show');
    
  cy
    .get('.destroy')
    .should('be.visible');

  // add code here

  cy
    .get('.destroy')
    .should('be.visible');
  
});

/* 
  👧 challenge #2: try to delete a todo item using .trigger() 
  command. use devtools to look into event listeners on ".destroy" item
*/
it('deletes a todo item', () => {

  cy
    .get('.todo')
    .trigger('mouseover');
    
  cy
    .get('.destroy');
  
});

/* 
  👩 challenge #3: check item as completed, without actually clicking on checkbox
  you can do this by adding class ".completed" to a todo item, look into documentation
  on how to do it
 */
it('completes a todo item', () => {

  cy
    .get('.todo')
    .invoke(); // add correct argument here
  
});

/* 
  🤓 challenge #4: you can use invoke to add text into the input field, 
  without using the command .type() all you need to do is to invoke 
  value of the ".new-todo" element
*/
it('add text into new todo field', () => {

  cy
    .get('.new-todo')
    .invoke(); // add correct argument here
  
});