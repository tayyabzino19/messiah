'use strict';

/**
 * post-favorite service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-favorite.post-favorite');
