MAIN.session = SESSION()

MAIN.session.ondata = function(meta, next) {
    NOSQL('users').one().where('id', meta.id).fields('id,login').callback(next);
}

FUNC.authcookie = function($, userid) {
    var data = {
        name: CONF.cookie,
        key: CONF.cookie_key,
        expire: CONF.cookie_expire,
        id: userid,
        data: null,
        note: ''
    }
    MAIN.session.setcookie($, data, $.done())
}

FUNC.getcookie = function($, callback) {
    var data = {
        name: CONF.cookie,
        key: CONF.cookie_key,
        expire: CONF.cookie_expire
    }
    MAIN.session.getcookie($, data, callback);
}