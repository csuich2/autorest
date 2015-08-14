/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.11.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Dog class.
 * @constructor
 */
function Dog() { }

/**
 * Validate the payload against the Dog schema
 *
 * @param {JSON} payload
 *
 */
Dog.prototype.validate = function (payload) {
  if (!payload) {
    throw new Error('Dog cannot be null.');
  }
  if (payload['id'] !== null && payload['id'] !== undefined && typeof payload['id'] !== 'number') {
    throw new Error('payload[\'id\'] must be of type number.');
  }

  if (payload['name'] !== null && payload['name'] !== undefined && typeof payload['name'].valueOf() !== 'string') {
    throw new Error('payload[\'name\'] must be of type string.');
  }

  if (payload['food'] !== null && payload['food'] !== undefined && typeof payload['food'].valueOf() !== 'string') {
    throw new Error('payload[\'food\'] must be of type string.');
  }
};

/**
 * Deserialize the instance to Dog schema
 *
 * @param {JSON} instance
 *
 */
Dog.prototype.deserialize = function (instance) {
  return instance;
};

module.exports = new Dog();
