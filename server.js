const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Configure CORS
app.use(cors({
    origin: ['https://handyed.co.uk', 'https://www.handyed.co.uk', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept'],
    credentials: true,
    maxAge: 86400 // 24 hours
}));

app.use(express.json());

// Add a test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.post('/api/estimate-price', async (req, res) => {
    const { service } = req.body;
    
    if (!service) {
        return res.status(400).json({ error: 'Service description is required' });
    }

    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: "deepseek/deepseek-r1:free",
                messages: [
                    {
                        role: 'system',
                        content: `You are a professional handyman pricing assistant for UK services. Use these guidelines for consistent pricing:

Basic Services (£30-40/hr):
- Basic repairs
- Furniture assembly
- Picture hanging
- Simple installations

Standard Services (£40-70/hr):
- General plumbing work
- Basic electrical work
- Painting and decorating
- Door/window repairs
- Basic shelving

Complex Services (£70-120/hr):
- Custom carpentry
- Complex installations
- Loft ladder installation
- Multiple trade skills required
- Emergency callouts

Specialized Services (£120-200/hr):
- Custom loft conversions
- Complex electrical work
- Specialized installations
- Multi-day projects
- Custom building work

Analyze the requested service, match it to the appropriate category, and provide a consistent price within that range. Return ONLY the hourly rate in £XX format.`
                    },
                    {
                        role: 'user',
                        content: `Based on this service description, what is the appropriate hourly rate: "${service}"`
                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'HTTP-Referer': 'https://github.com/handyed/pricing',
                    'X-Title': 'HandyEd Pricing Calculator',
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!response.data || !response.data.choices || !response.data.choices[0]) {
            console.error('Invalid API response:', response.data);
            return res.status(500).json({ error: 'Invalid response from AI service' });
        }

        let price = response.data.choices[0].message.content.trim();
        
        // Extract only the first number found after £ symbol
        const priceMatch = price.match(/£(\d+)/);
        if (priceMatch) {
            let numericPrice = parseInt(priceMatch[1]);
            
            // Only validate for extremely unreasonable prices
            if (numericPrice < 30) numericPrice = 30; // Minimum reasonable rate
            if (numericPrice > 3000) numericPrice = 3000; // Prevent extremely unreasonable rates
            
            price = `£${numericPrice}`;
        } else {
            // Default fallback price if no valid price format is found
            console.warn('No valid price format found in:', price);
            price = '£75';
        }
        
        res.json({ price });
    } catch (error) {
        console.error('Detailed error:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        
        // Send a more specific error message
        if (error.response?.status === 401) {
            res.status(401).json({ error: 'API authentication failed. Please check API key.' });
        } else if (error.response?.status === 429) {
            res.status(429).json({ error: 'Too many requests. Please try again later.' });
        } else {
            res.status(500).json({ 
                error: 'Failed to estimate price. Please try again.',
                details: error.message
            });
        }
    }
});

// For Vercel serverless deployment
if (process.env.VERCEL) {
    module.exports = app;
} else {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} 