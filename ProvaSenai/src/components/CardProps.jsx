import React from 'react';
import {useNavigate} from 'react-router-dom';
import {CiLocationOn} from 'react-icons/ci';
import {IoPencil, IoTimeOutline} from 'react-icons/io5';

const CardCurso = ({id, nome, imagem, cidade, modalidade, cargaHoraria}) => {
	const navigate = useNavigate();

	return (
		<div className="w-[411px] h-[542px] rounded-lg overflow-hidden shadow-lg bg-white flex flex-col text-start">
			<img className="w-full h-48 object-cover" src={imagem} alt={nome} />

			<div className="p-4 flex flex-grow flex-col">
				<h2 className="text-xl h-[70px] font-semibold text-gray-800 mt-2 text-start mb-5">
					{nome}
				</h2>
				<p className="text-[#8C8C8C] text-[17px] flex items-center gap-2 mb-2">
					<CiLocationOn className="text-lg" />
					{cidade}
				</p>
				<p className="text-[#8C8C8C] text-[17px] flex items-center gap-2 mb-2">
					<IoPencil className="text-lg" />
					{modalidade}
				</p>
				<p className="text-[#8C8C8C] text-[17px] flex items-center gap-2 mb-2">
					<IoTimeOutline className="text-lg" />
					{cargaHoraria} horas
				</p>

				<button
					onClick={() => navigate(`/curso/${id}`)}
					className="mt-auto w-full !bg-black text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
					Visualizar
				</button>
			</div>
		</div>
	);
};

export default CardCurso;
