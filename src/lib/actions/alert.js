'use strict';

module.exports = function(settings) {
  if (settings.name) {
    alert('Hello ' + settings.name + '!')
  } else {
    alert('Hello World!')
  }
};
