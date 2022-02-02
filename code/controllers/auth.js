exports.install = function() {
    ROUTE('POST /login', login);
    ROUTE('GET /logout', logout);
}

function login() {
    var self = this;
    var data = self.body;
    if (data.login && data.password) {
        NOSQL('users').one()
        .where('login', data.login)
        .where('password', data.password)
        .callback(function(err, res) {
            if (res) {
                AUDIT(self, `Successfully logged ${res.login}`)
                return FUNC.authcookie(self, res.id);
            } else {
                AUDIT(self, `Unsuccessfully logged ${data.login}`)
                return self.throw401()
            }
        })
    } else {
        AUDIT(self, `No login info`)
        return self.throw401();
    }
}

function logout() {
    var self = this;
    if (self.user) {
        MAIN.session.remove2(self.user.id, self.done());
    }
    self.success();
}