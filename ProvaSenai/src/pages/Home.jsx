import React, {useState, useEffect} from 'react';
import Header from '../components/Header.jsx';
import CardProps from '../components/CardProps.jsx';


const Home = () => {
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

			<img src="banner-loja_senai_1903x600.png" alt="" className="mt-10" />
			<div className="flex justify-between items-center text-black">
				<div className="w-[50%] mt-[180px] h-full ">
					<img src="T_cnico_em_IOT_1.jpg" alt="" />
				</div>
				<div className="w-[40%] mr-10  ">
					<p className="text-left font-roboto text-[#ACD2EC] text-[20px] mb-[-10px]">
						Conheça os cursos
					</p>
					<h4 className="text-left font-roboto font-extrabold text-[30px] text-[#2454A0] mb-[10px]">
						Cursos Técnicos
					</h4>
					<p className="text-left font-roboto text-[16px] w-[80%] ">
						Os cursos técnicos do Senai-ES estão alinhados às maiores
						necessidades das indústrias capixabas e obtêm índices excelentes de
						aprovação no mercado de trabalho. Na última pesquisa de
						acompanhamento de egressos realizada pela instituição, 95% das
						empresas contratantes declararam que preferem profissionais formados
						pelo Senai-ES na hora de contratar.
					</p>
				</div>
			</div>
			<div className="container m-auto p-auto">
				<h1 className="text-3xl font-semibold text-center mt-8">
					Cursos do Senai
				</h1>
				<div className="flex flex-wrap gap-4 justify-center ">
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
		</div>
	);
};

export default Home;
