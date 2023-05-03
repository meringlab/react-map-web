import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { ROUTES } from './Routes';



const lightBlueTheme = createTheme({
	palette: {
		primary: {
			main: '#e3f2fd',
		},
		secondary: {
			main: '#2962ff',
		},
	},
});

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(
	({ theme, open }) => ({
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

const Header = (props) => {
	console.log('[Header.js] -> render');
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		console.log(event, newValue);
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={lightBlueTheme}>
			<AppBar position="fixed" open={props.open}>
				<Toolbar>
					<IconButton color="inherit"
						aria-label="open drawer"
						onClick={props.handleDrawerOpen}
						edge="start"
						sx={{ marginRight: 5, ...(props.open && { display: 'none' }), }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						MicrobeAtlas
					</Typography>
					<Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="nav tabs example">
						{ROUTES.map((route, index) => (
							<Tab key={route.to} icon={route.icon} label={route.text} value={route.to} to={route.to} component={Link} />
						))}
					</Tabs>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default Header;