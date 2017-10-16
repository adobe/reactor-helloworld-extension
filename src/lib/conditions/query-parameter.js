'use strict';

var queryString = require('@adobe/reactor-query-string');

module.exports = function(settings) {
  var queryParams = queryString.parse(location.search);
  return settings.queryParamValue === queryParams[settings.queryParam];
};
