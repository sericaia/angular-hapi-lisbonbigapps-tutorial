/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

module.exports = function(server) {
    // Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
    var controller = requireDirectory(module, './server/controllers');

    // Array of routes for Hapi
    var routeTable = [
        
        //route that retrieves itinerary list to front-end
        {
            method: 'GET',
            path: '/getitinerarylist',
            config: controller.base.getitinerarylist
        },
        
        //hapi default routes...
        {
            method: 'GET',
            path: '/about',
            config: controller.base.about
        },
        {
            method: 'GET',
            path: '/',
            config: controller.base.index
        },
        {
            method: 'GET',
            path: '/{path*}',
            config: controller.base.missing
        },
        {
            method: 'GET',
            path: '/partials/{path}',
            config: controller.assets.partials
        },
        {
            method: 'GET',
            path: '/images/{path*}',
            config: controller.assets.images
        },
        {
            method: 'GET',
            path: '/css/{path*}',
            config: controller.assets.css
        },
        {
            method: 'GET',
            path: '/js/{path*}',
            config: controller.assets.js
        },
        {
            method: 'GET',
            path: '/bower_components/{path*}',
            config: controller.assets.bower
        }
    ];
    return routeTable;
}
