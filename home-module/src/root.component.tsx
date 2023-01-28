import { ToastContainer } from 'react-toastify';
import Routers from 'src/routes';

import 'src/styles/index.scss';

const App: React.FC = () => {
	return (
		<>
			<ToastContainer />
			<Routers />
		</>
	);
};

export default App;
