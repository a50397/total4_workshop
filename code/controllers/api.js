exports.install = function() {
	ROUTE('API /api/users users_query  *Users  --> query');
    ROUTE('API /api/users +users_insert *Users  --> insert');
};
