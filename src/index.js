const app = require('./app');

const main = () => {
    let port = process.env.PORT || 4000;

    app.listen(port, () => {
        console.log(`Estas conectado en el puerto: ${port}`);
    })
}

main();