require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/receita', async (req, res) => {
  const { contexto } = req.body;

  if (!contexto) {
    return res.status(400).json({ error: 'Você deve fornecer um contexto ou ingredientes.' });
  }

  try {
    const resposta = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
      model: 'mistralai/mistral-7b-instruct', // modelo gratuito e rápido
      messages: [
        { role: 'system', content: 'Você é um assistente de receitas criativo e direto ao ponto.' },
        { role: 'user', content: `Me sugira uma receita com base nisso: ${contexto}` }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const receita = resposta.data.choices[0].message.content;
    res.json({ receita });

  } catch (error) {
    console.error('Erro ao consultar LLM:', error.message);
    res.status(500).json({ error: 'Erro ao gerar receita.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});