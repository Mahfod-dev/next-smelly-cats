import Header from 'components/navigation/Header';
import Footer from 'components/navigation/Footer';

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
export default MainLayout;
