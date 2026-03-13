import express from 'express';
import path from 'path';
//creating app  instance
const app = express();
//defining port
const PORT = 30005;
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//# sourceMappingURL=server.js.map