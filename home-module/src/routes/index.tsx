import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainLayout } from '@m88yos/utils';
import { Home } from 'src/pages';

const Routers = () => {
	return (
		<Router>
			<Switch>
				<MainLayout>
					<Route path="/" exact>
						<Home />
					</Route>
				</MainLayout>
			</Switch>
		</Router>
	);
};

export default Routers;
