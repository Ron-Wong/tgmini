// server/auth/telegramAuth.js

const crypto = require('crypto');

const telegramAuth = (req, res) => {
    const { hash, ...data } = req.query;
    const token = process.env.TELEGRAM_BOT_TOKEN;

    const secret = crypto.createHash('sha256').update(token).digest();
    const sortedData = Object.keys(data).sort().map((key) => `${key}=${data[key]}`).join('\n');
    const checkString = crypto.createHmac('sha256', secret).update(sortedData).digest('hex');

    if (checkString === hash) {
        res.redirect('/?auth=success');
    } else {
        res.redirect('/?auth=failed');
    }
};

module.exports = telegramAuth;
