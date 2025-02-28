import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CardCadastro from '../components/CardCadastro';
const CursoDetalhes = () => {
	const {id} = useParams();
	const [curso, setCurso] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`http://localhost:3000/cursos/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setCurso(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Erro ao buscar curso:', error);
				setLoading(false);
			});
	}, [id]);

	if (loading)
		return <p className="text-center text-lg font-bold">Carregando...</p>;

	if (!curso)
		return (
			<p className="text-center text-lg font-bold text-red-500">
				Curso não encontrado.
			</p>
		);

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
			<h1 className="text-4xl font-extrabold text-gray-800 mb-4">
				{curso.nome}
			</h1>
			<img
				src={curso.imagem}
				alt={curso.nome}
				className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
			/>

			<div className="text-lg text-gray-700 mb-4">
				<p>
					<strong className="font-semibold">Local:</strong> {curso.cidade}
				</p>
				<p>
					<strong className="font-semibold">Modalidade:</strong>{' '}
					{curso.modalidade}
				</p>
				<p>
					<strong className="font-semibold">Carga Horária:</strong>{' '}
					{curso.cargaHoraria} horas
				</p>
			</div>

			<p className="text-gray-600 leading-relaxed">{curso.descricao}</p>

			<CardCadastro/>
		</div>
	);
};

export default CursoDetalhes;
