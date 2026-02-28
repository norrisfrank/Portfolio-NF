const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
require('dotenv').config();

const app = express();
app.use(compression());
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Debugging - Log all requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Health check
app.get('/health', (req, res) => res.status(200).send('Server is UP'));

// Check for public folder on startup
const publicPath = path.join(__dirname, 'public');
const fs = require('fs');
if (!fs.existsSync(publicPath)) {
    console.error('CRITICAL: public folder not found at', publicPath);
} else {
    console.log('Serving static files from', publicPath);
    console.log('Files in public folder:', fs.readdirSync(publicPath));
}

app.use(express.static(publicPath));

// Explicit root route
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// API Routes
app.post('/api/commissions', (req, res) => {
    const { name, email, phone, type, description } = req.body;
    console.log('--- NEW COMMISSION INQUIRY ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Type: ${type}`);
    console.log(`Description: ${description}`);
    console.log('------------------------------');

    res.status(200).json({
        success: true,
        message: 'Inquiry received successfully! Norris will reach out soon.'
    });
});

app.post('/api/payments', (req, res) => {
    const { amount, plan, cardDetails } = req.body;
    console.log('--- NEW PAYMENT PROCESSED ---');
    console.log(`Plan: ${plan}`);
    console.log(`Amount: ${amount}`);
    console.log(`Card: ${cardDetails.number.slice(-4).padStart(16, '*')}`);
    console.log('-----------------------------');

    // Simulate payment processing
    setTimeout(() => {
        res.status(200).json({
            success: true,
            message: `Payment of ${amount} for ${plan} plan successful!`,
            transactionId: `TXN_${Math.random().toString(36).substr(2, 9).toUpperCase()}`
        });
    }, 1000);
});

// Serve frontend - Catch-all middleware
app.use((req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(500).send('Final fallback: index.html not found. Check public folder.');
        }
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
