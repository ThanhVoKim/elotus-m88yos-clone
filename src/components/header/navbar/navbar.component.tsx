import React from 'react';
import { Link } from 'react-router-dom';

import { navMenu } from 'src/mocks';
import postImage from 'src/assets/rebates/rebate-sports-VN.png';

import './navbar.style.scss';
import { Button } from 'src/components/button';

export const prefixClassNavbar = 'navbar';
export const prefixClassMegaMenu = 'mega-menu';
export const Navbar = () => {
	return (
		<div className={`${prefixClassNavbar}`}>
			<div className="container">
				<ul className={`${prefixClassNavbar}__list `}>
					{navMenu.map((nav, index) => {
						const { childNav } = nav;
						return (
							<div
								key={index}
								className={`${prefixClassNavbar}__nav-list-item ${prefixClassMegaMenu}__item`}
							>
								<Link to={nav.path} className={`${prefixClassMegaMenu}__title`}>
									{nav.name}
								</Link>

								{childNav && (
									<div className={`${prefixClassMegaMenu}__menu`}>
										<div className={`${prefixClassMegaMenu}__menu-backdrop`}>
											<div
												className={`${prefixClassMegaMenu}__menu-entry container`}
											>
												{childNav?.rebates && (
													<div className={`${prefixClassMegaMenu}__rebates`}>
														<Link
															className={`${prefixClassMegaMenu}__rebates-link`}
															to={`${childNav.rebates}`}
														>
															<img src={postImage} alt="rebate img" />
														</Link>
														<Button color="secondary">Chi tiết</Button>
													</div>
												)}
												<ul className={`${prefixClassMegaMenu}__menu-list`}>
													{childNav?.childNavMenu?.map((subMenuNav, index) => {
														return (
															<div
																className={`${prefixClassMegaMenu}__poster`}
																key={index}
															>
																<Link
																	className={`${prefixClassMegaMenu}__poster-link`}
																	to={`${subMenuNav.path}`}
																>
																	<img src={postImage} alt="nav img" />
																</Link>
															</div>
														);
													})}
												</ul>
											</div>
										</div>
									</div>
								)}
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
