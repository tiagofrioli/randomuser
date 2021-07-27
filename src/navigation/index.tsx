import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context';
import AppRoutes from './app.routes';

import AuthRoutes from './auth.routes';


const Routes: React.FC = () => {

	const { signed } = useContext(AuthContext);

	return signed ? <AppRoutes />  : <AuthRoutes />;
}

export default Routes;