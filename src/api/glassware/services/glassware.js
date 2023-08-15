'use strict';

/**
 * glassware service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::glassware.glassware');
