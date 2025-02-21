import React from 'react';
import Header from '../components/Header.jsx';
import {useState} from 'react';
import CardProps from '../components/CardProps.jsx';

const Home = () => {
	const [cursosSenai] = useState([
		{
			id: 1,
			imagem: 't_cnico_em_desenvolvimento_de_sistemas_.jpg',
			nome: 'TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS',
			cidade: 'Vitória',
			modalidade: 'Presencial',
			cargaHoraria: '1200',
		},
		{
			id: 2,
			imagem: 'mecanica__7_36.jpg',
			nome: 'TÉCNICO EM MECÂNICA INDUSTRIAL',
			cidade: 'Belo Horizonte',
			modalidade: 'Presencial',
			cargaHoraria: '1400',
		},
		{
			id: 3,
			imagem: 't_cnico-em-eletrot_cnica_12_15.jpg',
			nome: 'TÉCNICO EM ELETROTÉCNICA',
			cidade: 'São Paulo',
			modalidade: 'EAD',
			cargaHoraria: '1000',
		},
	]);
	return (
		<div>
			<Header />
			<img src="banner-loja_senai_1903x600.png" alt="" className="mt-10" />
			<div className='flex justify-between items-center text-black'> 
				<div className="w-[50%] mt-[180px]">
					<img src="T_cnico_em_IOT_1.jpg" alt="" />
				</div>
				<div className="w-[40%] mr-10 ">
					<p className='text-left text-[#ACD2EC]'>Conheça os cursos</p>
					<h4 className='text-left font-roboto text-[26px] text-[#2454A0]'>Cursos Técnicos</h4>
					<p className='text-left font-roboto w-[80%] '>
						Os cursos técnicos do Senai-ES estão alinhados às maiores
						necessidades das indústrias capixabas e obtém índices excelentes de
						aprovação no mercado de trabalho. Na última pesquisa de
						acompanhamento de egressos realizada pela instituição, 95% das
						empresas contratantes declararam que preferem profissionais formados
						pelo Senai-ES na hora de contratar.
					</p>
				</div>
			</div>
			<div className="container m-auto p-auto">
				<h1 className="text-3xl font-semibold text-center mt-8">
					Cursos do Senai{' '}
				</h1>
				<div className="flex flex-wrap gap-4 justify-center ">
					{cursosSenai.map((curso) => (
						<CardProps
							key={curso.id}
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
