// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
// 
// Code generated by Microsoft (R) AutoRest Code Generator 0.11.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var ServiceClient = msRest.ServiceClient;
var WebResource = msRest.WebResource;

var models = require('./models');

/**
 * @class
 * Initializes a new instance of the AutoRestValidationTest class.
 * @constructor
 *
 * @param {String} subscriptionId Subscription ID.
 *
 * @param {String} apiVersion Required string following pattern \d{2}-\d{2}-\d{4}
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {bool} [options.noRetryPolicy] - If set to true, turn off default retry policy
 */
function AutoRestValidationTest(subscriptionId, apiVersion, baseUri, options) {
  if (subscriptionId === null || subscriptionId === undefined) {
    throw new Error('\'subscriptionId\' cannot be null.');
  }
  if (apiVersion === null || apiVersion === undefined) {
    throw new Error('\'apiVersion\' cannot be null.');
  }

  if (!options) options = {};

  AutoRestValidationTest['super_'].call(this, null, options);
  this.baseUri = baseUri;
  if (!this.baseUri) {
    this.baseUri = 'http://localhost';
  }
  this.subscriptionId = subscriptionId;
  this.apiVersion = apiVersion;

  this._models = models;
}

util.inherits(AutoRestValidationTest, ServiceClient);

/**
 * Validates input parameters on the method. See swagger for details.
 * @param {Number} id Required int multiple of 10 from 100 to 1000.
 *
 * @param {String} resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
 *
 * @param {object} [options]
 *
 * @param {object} [options.customHeaders] headers that will be added to
 * request
 *
 * @param {function} callback
 *
 * @returns {Stream} The Response stream
 */
AutoRestValidationTest.prototype.validationOfMethodParameters = function (resourceGroupName, id, options, callback) {
  var client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.subscriptionId === null || this.subscriptionId === undefined || typeof this.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (id === null || id === undefined || typeof id !== 'number') {
      throw new Error('id cannot be null or undefined and it must be of type number.');
    }
    if (this.apiVersion === null || this.apiVersion === undefined || typeof this.apiVersion.valueOf() !== 'string') {
      throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.baseUri + 
                   '//fakepath/{subscriptionId}/{resourceGroupName}/{id}?api-version={apiVersion}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{id}', encodeURIComponent(id.toString()));
  var queryParameters = [];
  queryParameters.push('apiVersion=' + encodeURIComponent(this.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  httpRequest.headers['Content-Length'] = 0;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = parsedErrorResponse;
        if (error.body !== null && error.body !== undefined) {
          error.body = client._models['ErrorModel'].deserialize(error.body);
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = new msRest.HttpOperationResponse();
    result.request = httpRequest;
    result.response = response;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse;
      try {
        parsedResponse = JSON.parse(responseBody);
        result.body = parsedResponse;
        if (result.body !== null && result.body !== undefined) {
          result.body = client._models['Product'].deserialize(result.body);
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = httpRequest;
        deserializationError.response = response;
        return callback(deserializationError);
      }
    }

    return callback(null, result);
  });
};

/**
 * Validates body parameters on the method. See swagger for details.
 * @param {Product} [body] 
 *
 * @param {Number} [body.capacity] Non required int betwen 0 and 100 exclusive.
 *
 * @param {Array} [body.displayNames] Non required array of unique items from 0 to 6 elements.
 *
 * @param {String} [body.image] Image URL representing the product.
 *
 * @param {Number} id Required int multiple of 10 from 100 to 1000.
 *
 * @param {String} resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
 *
 * @param {object} [options]
 *
 * @param {object} [options.customHeaders] headers that will be added to
 * request
 *
 * @param {function} callback
 *
 * @returns {Stream} The Response stream
 */
AutoRestValidationTest.prototype.validationOfBody = function (resourceGroupName, id, body, options, callback) {
  var client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.subscriptionId === null || this.subscriptionId === undefined || typeof this.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (id === null || id === undefined || typeof id !== 'number') {
      throw new Error('id cannot be null or undefined and it must be of type number.');
    }
    if (body) {
      client._models['Product'].validate(body);
    }
    if (this.apiVersion === null || this.apiVersion === undefined || typeof this.apiVersion.valueOf() !== 'string') {
      throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.baseUri + 
                   '//fakepath/{subscriptionId}/{resourceGroupName}/{id}?api-version={apiVersion}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{id}', encodeURIComponent(id.toString()));
  var queryParameters = [];
  queryParameters.push('apiVersion=' + encodeURIComponent(this.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  requestContent = JSON.stringify(msRest.serializeObject(body));
  httpRequest.body = requestContent;
  httpRequest.headers['Content-Length'] = Buffer.isBuffer(requestContent) ? requestContent.length : Buffer.byteLength(requestContent, 'UTF8');
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = parsedErrorResponse;
        if (error.body !== null && error.body !== undefined) {
          error.body = client._models['ErrorModel'].deserialize(error.body);
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = new msRest.HttpOperationResponse();
    result.request = httpRequest;
    result.response = response;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse;
      try {
        parsedResponse = JSON.parse(responseBody);
        result.body = parsedResponse;
        if (result.body !== null && result.body !== undefined) {
          result.body = client._models['Product'].deserialize(result.body);
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = httpRequest;
        deserializationError.response = response;
        return callback(deserializationError);
      }
    }

    return callback(null, result);
  });
};

module.exports = AutoRestValidationTest;
