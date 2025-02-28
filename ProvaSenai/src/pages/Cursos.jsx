import React, {useState, useEffect} from 'react';
import Header from '../components/Header.jsx';
import CardProps from '../components/CardProps.jsx';
import BotaoCadastro from '../components/BotaoCadastro.jsx';

const Cursos = () => {
	const [cursos, setCursos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/cursos') // Busca os cursos do db.json
			.then((res) => res.json())
			.then((data) => setCursos(data))
			.catch((error) => console.error('Erro ao buscar cursos:', error));
	}, []);

	return (
		<div>
			<Header />
			<div className="h-[330px] flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.5),rgb(0,0,0)),url(https://admin.loja.senaies.com.br/pub/media/catalog/tmp/category/T_cnico_em_IOT_1.jpg)] bg-cover bg-center relative mb-[50px]">
				<div className="text-center text-white">
					<h1 className="text-4xl font-bold mb-4">
						Transforme sua carreira com o SENAI
					</h1>
					<p className="text-lg">
						Cadastre-se e tenha acesso a informações exclusivas sobre nossos
						cursos.
					</p>
					<BotaoCadastro />
				</div>
			</div>

			<div className="flex flex-wrap gap-4 justify-center">
				{cursos.map((curso) => (
					<CardProps
						key={curso.id}
						id={curso.id}
						nome={curso.nome}
						imagem={curso.imagem}
						cidade={curso.cidade}
						modalidade={curso.modalidade}
						cargaHoraria={curso.cargaHoraria}
						descricao={curso.descricao}
					/>
				))}
			</div>
		</div>
	);
};

export default Cursos;
