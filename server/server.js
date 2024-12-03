require('dotenv').config();

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const discourseApiKey = process.env.DISCOURSE_API_KEY;
const discourseUrl = process.env.DISCOURSE_URL;

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Telegram Authentication Endpoint
app.get('/auth/callback', (req, res) => {
    // Handle Telegram authentication callback
    res.send('Telegram authentication successful!');
});

// Root endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Telegram Bot Token:', telegramBotToken);
    console.log('Discourse API Key:', discourseApiKey);
    console.log('Discourse URL:', discourseUrl);
});
