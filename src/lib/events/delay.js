'use strict';

module.exports = function(settings, trigger) {
  setTimeout(trigger, settings.delay);
};
