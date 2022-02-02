exports.install = function() {
    ROUTE('+GET /api', dynamic_route)
}

function dynamic_route() {

    this.plain('HERE WE ARE')
}