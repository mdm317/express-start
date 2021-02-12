const express = require('express')
const app = express()
const PORT = 80

const handleListening = () =>
console.log(`✅ Listening Port : ${PORT}`);

app.listen(PORT, handleListening);

app.get('/*', (req, res) => {
    console.log('hello');
    return res.send('hello')
})