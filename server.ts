import express from 'express';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';


//converting url to File paths. need to do this because we are using es modules instaed of commonjs
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//creating app  instance
const app = express();

//defining port
const PORT = 30005;


//sending file to res
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname,'public','contact.html'))
})

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});