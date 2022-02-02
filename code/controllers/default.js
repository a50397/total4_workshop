exports.install = function() {
	ROUTE('+GET /', index_view);
};

function index_view() {
	this.view("index");
}