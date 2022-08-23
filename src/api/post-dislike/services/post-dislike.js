'use strict';

/**
 * post-dislike service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-dislike.post-dislike');
