import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav className="flex  items-center h-16 gap-5 text-white relative ">
				<nav className="flex items-center h-16 gap-5 relative">
					<nav className="flex items-center h-16 gap-5 relative">
						<NavLink
							to="/home"
							style={({isActive}) => ({
								color: isActive ? '#001b47' : 'white',
							})}>
							Home
						</NavLink>
						<NavLink
							to="/cadastro"
							style={({isActive}) => ({
								color: isActive ? '#001b47' : 'white',
							})}>
							Cadastro
						</NavLink>
						<NavLink
							to="/contato"
							style={({isActive}) => ({
								color: isActive ? '#001b47' : 'white',
							})}>
							Contato
						</NavLink>
						<NavLink
							to="/sobre"
							style={({isActive}) => ({
								color: isActive ? '#001b47' : 'white',
							})}>
							Sobre
						</NavLink>
					</nav>
				</nav>
			</nav>
		</div>
	);
};

export default NavBar;
