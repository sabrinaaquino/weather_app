import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/weather', async (req, res) => {
    const cityName = req.query.cityName;
    const apiKey = 'fdb9776aeaf5451d9f622810232303';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching weather data.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
