import Header from 'components/navigation/Header';
import Footer from 'components/navigation/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<ToastContainer />
		</>
	);
};
export default MainLayout;
