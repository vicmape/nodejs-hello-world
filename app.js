const express = require('express');
const app = express();

app.use(express.json());
app.use('/', (req, res) =>{
    res.status(200).send({ status: "sucess", message: "Hello World", secret:`${process.env.SECRET}`})
})

const PORT = process.env.API_PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));