exports.install = function() {
    ROUTE('#404', forouone)
}

function forouone() {
    this.plain('ERROR 404')
}