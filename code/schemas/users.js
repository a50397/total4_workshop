NEWSCHEMA('Users', function(schema) {
    schema.define('id', 'UID');
    schema.define('login', 'String', true, 'login is missing');
    schema.define('password', 'String', true, 'password is missing');
    
    schema.setInsert(function($, model) {
        model.id = UID();
        NOSQL('users').insert(model).callback($.done(model.id));
    })

    schema.setQuery(function($, model) {
        NOSQL('users').find().callback($.callback);
    })
})