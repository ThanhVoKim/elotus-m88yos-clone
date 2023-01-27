import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from 'src/layouts/layout-main/main.layout';
import { Home, Promotions } from 'src/pages';

const Routers = () => {
	return (
		<Router>
			<Switch>
				<Main>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/promotions" exact>
						<Promotions />
					</Route>
				</Main>
			</Switch>
		</Router>
	);
};

export default Routers;
