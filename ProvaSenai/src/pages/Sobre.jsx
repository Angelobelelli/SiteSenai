import React from 'react';
import Header from '../components/Header';
const Sobre = () => {
	return (
		<div>
			<Header />
			<section className="bg-blue-800 text-white py-20">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold mb-4">História do SENAI</h1>
					<p className="text-xl">
						Conheça a trajetória de uma instituição que transforma vidas e
						impulsiona a indústria.
					</p>
				</div>
			</section>

			{/* Linha do Tempo */}
			<section id="historia" className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">
						Linha do Tempo
					</h2>
					<div className="space-y-8">
						<div className="bg-gray-50 p-6 rounded-lg shadow-md">
							<h3 className="text-2xl font-bold text-blue-900">
								1952 - Fundação do SENAI ES
							</h3>
							<p className="mt-2 text-gray-700">
								A primeira escola, Pedro Nolasco, foi inaugurada em Cariacica,
								oferecendo cursos de marcenaria e mecânica.
							</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-lg shadow-md">
							<h3 className="text-2xl font-bold text-blue-900">
								1964 - Centro Jerônimo Monteiro
							</h3>
							<p className="mt-2 text-gray-700">
								Inauguração do centro em Vitória, com equipamentos modernos e
								alta demanda por vagas.
							</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-lg shadow-md">
							<h3 className="text-2xl font-bold text-blue-900">
								2020 - Inovação e Tecnologia
							</h3>
							<p className="mt-2 text-gray-700">
								Lançamento do Findeslab, Instituto SENAI de Tecnologia e
								Academia de Segurança Cibernética.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Vídeo Institucional */}
			<section id="video" className="py-16 bg-gray-100">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-8">
						Vídeo Institucional
					</h2>
					<div className="aspect-w-16 aspect-h-9">
						<iframe
							className="w-full h-full rounded-lg shadow-lg"
							src="https://www.youtube.com/embed/VIDEO_ID_AQUI"
							title="Vídeo Institucional do SENAI"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
				</div>
			</section>

			
			<section id="impacto" className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-8">
						Impacto do SENAI
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-gray-50 p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-900 mb-4">
								Formação Profissional
							</h3>
							<p className="text-gray-700">
								Milhares de profissionais qualificados para atender às demandas
								da indústria.
							</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-900 mb-4">
								Inovação
							</h3>
							<p className="text-gray-700">
								Projetos de pesquisa e desenvolvimento que impulsionam a
								competitividade.
							</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-900 mb-4">
								Parcerias
							</h3>
							<p className="text-gray-700">
								Colaboração com empresas para soluções customizadas e
								eficientes.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Sobre;
