import React from 'react';
import { ILanguageDropdownProps } from './language-dropdown.type';

import { flagVietnamIcon } from '../../assets';

import './language-dropdown.style.scss';
import { Dropdown } from '../component-dropdown';
import { languageSelectData } from '../../mocks';

export const prefixClassLanguageDropdown = 'language-dropdown';

export const LanguageDropdown: React.FC<ILanguageDropdownProps> = (props) => {
	const { theme = 'light' } = props;
	return (
		<div className={`${prefixClassLanguageDropdown} ${theme}`}>
			<Dropdown>
				<Dropdown.Header>
					<div className={`${prefixClassLanguageDropdown}__header`}>
						<img
							src={flagVietnamIcon}
							alt="flag icon"
							className={`${prefixClassLanguageDropdown}__flag`}
						/>
						Tiếng Việt (VND)
					</div>
				</Dropdown.Header>
				<Dropdown.Content>
					<ul className={`${prefixClassLanguageDropdown}__list-select`}>
						{languageSelectData.map((language) => (
							<li
								key={language.name}
								className={`${prefixClassLanguageDropdown}__item`}
							>
								<img
									src={language.flag}
									alt="flag icon"
									className={`${prefixClassLanguageDropdown}__flag`}
								/>
								{language.name}
							</li>
						))}
					</ul>
				</Dropdown.Content>
			</Dropdown>
		</div>
	);
};
