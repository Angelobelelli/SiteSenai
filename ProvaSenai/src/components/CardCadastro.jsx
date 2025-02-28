const CardCadastro = () => {
	return (
		<div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg my-8 border border-gray-200">
			<h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
				Receba Mais Informações
			</h2>
			<p className="text-gray-600 text-center mb-6">
				Inscreva-se para receber mais detalhes sobre os cursos disponíveis.
			</p>

			<form className="space-y-4">
				<div>
					<label
						htmlFor="nome"
						className="block text-sm font-medium text-gray-700">
						Nome
					</label>
					<input
						type="text"
						id="nome"
						name="nome"
						className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Seu nome"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700">
						E-mail
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Seu e-mail"
					/>
				</div>

				<div className="text-center">
					<button
						type="submit"
						className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
						Inscrever-se
					</button>
				</div>
			</form>
		</div>
	);
};

export default CardCadastro;
