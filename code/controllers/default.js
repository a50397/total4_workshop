exports.install = function() {
	ROUTE('+GET /', index_view, ['#test']);
};

function index_view() {
	this.view("index");
}