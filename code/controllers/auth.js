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
                AUDIT(self, `Successfully logged in ${res.login}`)
                return FUNC.authcookie(self, res.id);
            } else {
                AUDIT(self, `Unsuccessful attempt to log in ${data.login}`)
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
        AUDIT(self, `Successfully logged out ${self.user.login}`)
        MAIN.session.remove2(self.user.id, self.done());
    }
    self.success();
}