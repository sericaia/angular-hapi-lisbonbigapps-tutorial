// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    
    getitinerarylist: {
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply([{"name":"Night in Lisbon", "kilometers":3},
                  {"name":"City Center", "kilometers":5},
                  {"name":"Castle", "kilometers":2}]);
        },
        app: {
            name: 'getitinerarylist'
        }
    },
    
    //hapi defaults
    index: {
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply.view('index', {
                title: 'Awesome Boiler Plate Homepage'
            });
        },
        app: {
            name: 'index'
        }
    },
    about: {
        handler: function(request, reply){
            reply.view('about', {
                title: 'This is the example about page'
            });
        },
        app: {
            name: 'about'
        }
    },
    missing: {
        handler: function(request, reply){
            reply.view('404', {
                title: 'You found a missing page, but won the 404 error!'
            }).code(404);
        },
        app: {
            name: '404'
        }
    }
}
