exports.install = function() {
    ROUTE('#404', foroufor)
}

function foroufor() {
    this.plain('ERROR 404')
}