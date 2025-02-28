require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite que o frontend acesse a API sem bloqueios de segurança (CORS)
app.use(express.json()); // Habilita o suporte para JSON no backend

const API_CEP_URL = 'https://cdn.apicep.com/file/apicep/';

// Rota para buscar informações de um CEP fornecido pelo usuário
app.get('/cep/:cep', async (req, res) => {
	try {
		let {cep} = req.params; // Captura o CEP digitado pelo usuário na URL

		// Remove caracteres inválidos e mantém apenas números e hífen
		cep = cep.replace(/[^0-9-]/g, '');

		// Valida se o CEP está no formato correto (exemplo: 00000-000)
		if (!/^\d{5}-?\d{3}$/.test(cep)) {
			return res
				.status(400)
				.json({error: 'CEP inválido. Formato correto: 00000-000'});
		}

		// Faz a requisição para a API de CEP
		const response = await axios.get(`${API_CEP_URL}${cep}.json`);

		// Retorna os dados recebidos da API para o frontend
		res.json(response.data);
	} catch (error) {
		// Se a API retornar um erro 404, significa que o CEP não foi encontrado
		if (error.response && error.response.status === 404) {
			res.status(404).json({error: 'CEP não encontrado na base da API.'});
		} else {
			console.error('Erro ao buscar CEP:', error.message);
			res
				.status(500)
				.json({error: 'Erro ao buscar CEP', details: error.message});
		}
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
