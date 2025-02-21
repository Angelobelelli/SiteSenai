// Este arquivo é responsável por criar as rotas da aplicação
// e exportar o componente de roteamento para ser utilizado no arquivo index.js

// Importa o componente createBrowserRouter da biblioteca react-router-dom para criar as rotas
import {createBrowserRouter} from 'react-router-dom';

// Importa as páginas que serão utilizados
import App from './App.jsx';
import Home from './pages/Home.jsx';
import PaginaErro from './pages/PaginaErro.jsx';
import Sobre from './pages/Sobre.jsx';
import Login from './pages/Login.jsx';

// Cria as rotas da aplicação
const router = createBrowserRouter([
	{
		// Define a rota raiz da aplicação
		path: '/',
		element: <App />,
		// Define a página de erro da aplicação
		errorElement: <PaginaErro />,
		// Define as rotas filhas da rota raiz
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/sobre',
				element: <Sobre />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
]);

// Exporta o componente de roteamento
export default router;
