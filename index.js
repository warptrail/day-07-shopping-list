/* eslint-disable no-undef */
'use strict';

function docReady () {

  // This will overwrite the entire body with "Hello World"
  // $('body').text('Hello World!');
  // $('body').html('<h1>Hello World</h1>');

  // initialize an empty string that will be the value of the  text input box
  let itemToAdd = '';

  // When the event click is pushed on button, run the function
  // to create a new item in the shopping list
  $('form').submit(event => {
    // Prevent page from reloading & test button
    event.preventDefault();
    console.log('You have pressed the "Add Item" button.');

    // Get the value of the input box and store as var
    itemToAdd = $('form').find('input').val();
    console.log(`You are adding ${itemToAdd} to your cart. Swell choice!`);

    // Dynamically write the html for the new item at the bottom of the ul
    $('ul').append(`
    <li>
    <span class="shopping-item">${itemToAdd}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
    `);
  });

  // Make the buttons functional on each item in the list

  // The check button will toggle
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    console.log($(this)); // this is the check button
    //console.log($(this).closest('span'));
    console.log($(this).parent().siblings());
    //$(this).toggleClass('shopping-item__checked');
    $(this).parent().siblings().toggleClass('shopping-item__checked');
    // console.log($(this).closest('li').find('form'));
  });

  // Test some stuff
  // console.log($('li').next('li').next('li').find('span').text());

  // Now the delete button
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    console.log(this);
    $(this).parent().parent().remove();
  });

}

$(docReady);