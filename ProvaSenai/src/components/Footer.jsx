import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-blue-900 text-white py-8">
			<div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
				{/* Logos */}
				<div>
					<img src="/findes-logo.png" alt="Findes" className="mb-4" />
					<img src="/senai-logo.png" alt="Senai" />
				</div>

				{/* Redes Sociais */}
				<div>
					<h3 className="font-bold mb-2">Redes Sociais</h3>
					<p>
						<i className="fab fa-facebook"></i> /SenaiES
					</p>
					<p>
						<i className="fab fa-instagram"></i> @senaies
					</p>
					<p>
						<i className="fab fa-twitter"></i> SENAI_ES_Oficial
					</p>
				</div>

				{/* SAC */}
				<div>
					<h3 className="font-bold mb-2">
						SAC - Serviço de Atendimento ao Cliente
					</h3>
					<p>
						<i className="fas fa-envelope"></i> Fale Conosco
					</p>
					<p>
						<i className="fas fa-question-circle"></i> Perguntas Frequentes
					</p>
					<p>
						<i className="fas fa-phone"></i> Telefone: 0800 102 0880
					</p>
					<p>
						<i className="fas fa-clock"></i> Seg - Sex, 7h às 19h
					</p>
				</div>

				{/* Newsletter */}
				<div>
					<h3 className="font-bold mb-2">Newsletter</h3>
					<div className="flex border border-white rounded overflow-hidden">
						<input
							type="email"
							placeholder="Email"
							className="p-2 w-full bg-transparent outline-none"
						/>
						<button className="bg-white text-blue-900 px-4">📩</button>
					</div>
					<h3 className="font-bold mt-4">Aceitamos as seguintes bandeiras:</h3>
					<div className="flex gap-2 mt-2">
						<img src="/visa.png" alt="Visa" className="h-6" />
						<img src="/mastercard.png" alt="Mastercard" className="h-6" />
						<img src="/elo.png" alt="Elo" className="h-6" />
					</div>
				</div>
			</div>
			<div className="bg-blue-950 text-center py-3 mt-6 text-sm">
				<p>Copyright 2025 - SENAI ES - Uma realização da Indústria</p>
			</div>
		</footer>
	);
};

export default Footer;
