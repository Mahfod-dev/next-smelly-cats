import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { NavBar, Container, Nav, Navbar } from 'react-bootstrap';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
	const router = useRouter();

	return (
		<>
			<NavBar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand>
						<Link href='/'>The smelly cats</Link>
					</Navbar.Brand>
					<Nav className='ml-auto'>
						<Link href='/' passHref>
							<Nav.Link>Shows</Nav.Link>
						</Link>
						<Link href='/contact' passHref>
							<Nav.Link>Contact</Nav.Link>
						</Link>
						<Link href='/users/sign_in' passHref>
							<Nav.Link>Sign in</Nav.Link>
						</Link>

						<Nav.Link
							onClick={() => {
								router.push('/');
							}}>
							Sign out
						</Nav.Link>

						<Link href='/users/dashboard' passHref>
							<Nav.Link>Dashboard</Nav.Link>
						</Link>
					</Nav>
				</Container>
			</NavBar>
		</>
	);
};
export default Header;
