const express = require ('express');
const path = require ('path');
const app = express();
const port = process.env.PORT || 3033;


app.use(express.static(path.resolve(__dirname, './public')));

app.set(('views', path.resolve(__dirname, './views')));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
})
app.get('/registro', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/registro.html'));
})
app.post('/registro', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/registro.html'));
})



// app.listen (3001, () => {
//     console.log('Servidor corrindo en el puerto 3001');
// });


app.listen(port, () =>{console.log("Servidor corriendo en http://localhost:" + port)});