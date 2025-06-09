````markdown
# 🧠 LLM Receitas – Gerador de Receitas com IA

Este projeto é uma API simples em Node.js que utiliza uma LLM (Large Language Model) via [OpenRouter.ai](https://openrouter.ai) para gerar sugestões de receitas com base em ingredientes ou contextos fornecidos pelo usuário.

---

## 🚀 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/LLM_RECEITAS.git
cd LLM_RECEITAS
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a chave da API

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
OPENROUTER_API_KEY=sua_chave_aqui
```

> 🔑 Você pode gerar uma chave gratuita em: [https://openrouter.ai](https://openrouter.ai)

---

### 4. Inicie o servidor

```bash
npm start
```

A aplicação estará disponível em:
📍 **[http://localhost:3000](http://localhost:3000)**

---

## 📡 Endpoint

### `POST /receita`

Gera uma receita com base nos ingredientes ou contexto enviados.

* **Body (JSON)**:

```json
{
  "contexto": "frango, batata e pouco tempo para cozinhar"
}
```

* **Resposta**:

```json
{
  "receita": "Claro! Que tal um frango grelhado com batatas rústicas..."
}
```

---

## 🧱 Tecnologias usadas

* [Node.js](https://nodejs.org)
* [Express](https://expressjs.com)
* [Axios](https://axios-http.com)
* [dotenv](https://github.com/motdotla/dotenv)
* [OpenRouter.ai](https://openrouter.ai)

---

## 💡 Possíveis melhorias

* Histórico de receitas geradas;
* Salvamento em banco de dados (MongoDB);
* Frontend com React ou app mobile;
* Integração com Telegram ou WhatsApp via bot.

---

## 📄 Licença

Este projeto é livre para uso educacional e pessoal. Sinta-se à vontade para contribuir!

---

### ✨ Feito por Evellyn Silva

```

---


