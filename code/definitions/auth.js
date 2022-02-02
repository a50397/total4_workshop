AUTH(function($) {
    FUNC.getcookie($, function(err, user, meta) {
        if (!user) {
            return $.invalid();
        }
        return $.success(user);
    })
})