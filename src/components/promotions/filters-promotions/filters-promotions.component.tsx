import React from 'react';
import { IFiltersPromotionsProps } from './filters-promotions.type';
import filterIcon from 'src/assets/icons/icon-filter.svg';

import './filters-promotions.style.scss';
import { Button } from 'src/components/button';
import { promotionsFilterMenu } from 'src/mocks';

export const prefixClassFiltersPromotions = 'filters-promotions';

export const FiltersPromotions: React.FC<IFiltersPromotionsProps> = () => {
	return (
		<div className={`${prefixClassFiltersPromotions}`}>
			<div className="container">
				<div className={`${prefixClassFiltersPromotions}__entry`}>
					<div
						className={`${prefixClassFiltersPromotions}__menu-list dragable`}
					>
						{promotionsFilterMenu.map((filterMenu, index) => (
							<div
								key={index}
								className={`${prefixClassFiltersPromotions}__menu-item`}
							>
								<button
									className={`${prefixClassFiltersPromotions}__menu-btn`}
									type="button"
								>
									{filterMenu.name}
								</button>
							</div>
						))}
					</div>
					<div className={`${prefixClassFiltersPromotions}__actions`}>
						<Button color="primary" size="md">
							<img src={filterIcon} alt="filter Icon" />
							Bộ lọc
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
