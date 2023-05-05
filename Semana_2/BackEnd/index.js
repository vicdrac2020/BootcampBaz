import app from './src/config/server.js';
import { serverApiRest } from './src/config/env.js';
app.listen(serverApiRest.port,() => {
    console.log("Ready listen on port", serverApiRest.port);
});