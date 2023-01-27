export interface IMatch {
	title?: string;
	date?: string;
	teamA?: string;
	teamB?: string;
	logoTeamA?: string;
	logoTeamB?: string;
}

export interface IMatchCardProps {
	match: IMatch;
}
