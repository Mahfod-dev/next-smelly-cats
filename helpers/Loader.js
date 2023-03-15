import CircularProgress from '@mui/material/CircularProgress';

export const Loader = ({ full }) => (
	<div className={`root_loader ${full ? 'full' : ''}`}>
		<CircularProgress />
	</div>
);
