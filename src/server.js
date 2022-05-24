const Hapi = require('@hapi/hapi');
const {route} = require('@hapi/hapi/lib/cors');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(route);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
