import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainLayout } from '@m88yos/utils';
import { Promotions } from 'src/pages';

const Routers = () => {
	return (
		<Router>
			<Switch>
				<MainLayout>
					<Route path="/promotions" exact>
						<Promotions />
					</Route>
				</MainLayout>
			</Switch>
		</Router>
	);
};

export default Routers;
