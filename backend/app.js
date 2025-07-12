const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Раздаём build
app.use(express.static(path.join(__dirname, '../code/build')));

// Для всех маршрутов отдаём index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../code/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
