const express = require('express');
//const cors = require('cors'); 
const app = express();
const port = 8080;

// Enable CORS
//app.use(cors()); 

app.use(express.static('../frontend'));

app.get('/calculate', (req, res) => {
    const expression = req.query.expression;
    try{
        const result = eval(expression);
        res.send(result.toString());
    } catch (e) {
        res.send('Error');
    }
});

//start  the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});