import $ from 'jquery';
import _ from 'lodash';
import './body.css';

const updateCounter = _.debounce(() => {
  let count = Number($('#count').text()) || 0;
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}, 300);

$('body').append('<button id="button">Click here to get started</button><p id="count"></p>');
$('#button').on('click', updateCounter);
