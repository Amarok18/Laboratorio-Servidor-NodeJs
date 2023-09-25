const chalk = require ('chalk');
const http = require('http');
const port = 8000;
const host = 'localhost';


const mensaje = {
        nombre:"Jose Lopez",
        mensaje:"Hola a Todos"
    };
const requestListener = (req,res)=>{
    res.setHeader("Content-type","application/json");
    res.end(JSON.stringify(mensaje));
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(chalk.green(`Servidor corriendo en \n http://${host}:${port}`));
});