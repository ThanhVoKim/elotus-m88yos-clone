import React from 'react';
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
								<a href={nav.path} className={`${prefixClassMegaMenu}__title`}>
									{nav.name}
								</a>

								{childNav && (
									<div className={`${prefixClassMegaMenu}__menu`}>
										<div className={`${prefixClassMegaMenu}__menu-backdrop`}>
											<div
												className={`${prefixClassMegaMenu}__menu-entry container`}
											>
												{childNav?.rebates && (
													<div className={`${prefixClassMegaMenu}__rebates`}>
														<a
															className={`${prefixClassMegaMenu}__rebates-link`}
															href={`${childNav.rebates}`}
														>
															<img src={postImage} alt="rebate img" />
														</a>
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
																<a
																	className={`${prefixClassMegaMenu}__poster-link`}
																	href={`${subMenuNav.path}`}
																>
																	<img src={postImage} alt="nav img" />
																</a>
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
