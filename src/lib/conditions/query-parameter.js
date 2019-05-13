/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

'use strict';

var queryString = require('@adobe/reactor-query-string');

module.exports = function(settings) {
  var queryParams = queryString.parse(location.search);
  return settings.queryParamValue === queryParams[settings.queryParam];
};
