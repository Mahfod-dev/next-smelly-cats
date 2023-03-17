import Link from 'next/link';
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { showToast } from 'helpers/toastHelpers';
import {
	successGlobal,
	clearNotification,
} from 'store/reducers/notifications.reducer';

import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
	const router = useRouter();

	const dispatch = useDispatch();
	const notifications = useSelector((state) => state.notifications);

	const showNotification = useCallback(
		(type) => {
			let { global } = notifications;

			const message = global.message ? global.message : type;

			if (notifications && global.type === type) {
				showToast(type, message);
				dispatch(clearNotification());
			}
		},
		[notifications, dispatch]
	);

	useEffect(() => {
		showNotification('success');
		showNotification('error');
	}, [showNotification]);

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
							}}
						>
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
