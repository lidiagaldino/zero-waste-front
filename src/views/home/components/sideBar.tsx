import React, { useState } from 'react'

const sideBar = () => {
    const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: {/*"icons/grid.svg",*/}
		},
		{
			text: "Admin Profile",
			icon: {/*"icons/grid.svg",*/}
		},
		{
			text: "Messages",
			icon: {/*"icons/grid.svg",*/}
		},
		{
			text: "Analytics",
			icon: {/*"icons/grid.svg",*/}
		},
		{
			text: "File Manager",
			icon: {/*"icons/grid.svg",*/}
		},
		{
			text: "Orders",
			icon: {/*"icons/grid.svg",*/}
		},
		{
			text: "Saved Items",
			icon: {/*"icons/grid.svg",*/}
		},
		{
			text: "Settings",
			icon: {/*"icons/grid.svg",*/}
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt=""  />
							<h2>Showkart</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src="" alt=""  />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt=""  />
			</div>
		</div>
	);
};

export default sideBar