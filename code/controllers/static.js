exports.install = function() {
    ROUTE('FILE /img/*', image_route);
    RESIZE('/image/small/', small_image_route, ['/images/', 'png'])
}

function image_route(req, res) {
    var filename = U.getName(req.url);
    res.file(U.join(PATH.public(), 'images', filename))
}

function small_image_route(image) {
    image.resize(100, 100);
    image.grayscale();
    image.minify();
}