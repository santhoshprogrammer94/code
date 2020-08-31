const travelRouteController = require( '../controllers/travel-route.controller' );
const urn = '/travelroute';

const TravelRoute = app => {

    app.route( urn )
        .post( travelRouteController.create )
        .get( travelRouteController.find )
        .put( travelRouteController.update )
        .delete( travelRouteController.remove );

    app.route( `${urn}/bestRoute/:route` )
        .get( travelRouteController.bestRoute );

}

module.exports = TravelRoute;

    