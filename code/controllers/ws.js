exports.install = function() {
	ROUTE('SOCKET /ws', ws_route);
};

function ws_route() {
	var self = this;

    self.autodestroy();

    self.on('open', function(client) {
        client.send('Hello!');
        // self.send();
    })

    self.on('message', function(client, msg) {
        client.send(new Date().toLocaleString());
    })
}