'use strict';

var getQueryParam = require('@turbine/get-query-param');

module.exports = function(settings) {
  return settings.queryParamValue === getQueryParam(settings.queryParam);
};
