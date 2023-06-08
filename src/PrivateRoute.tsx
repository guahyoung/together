import { Navigate } from 'react-router-dom';
import { useAuthState } from './firebase/auth';
import LoadingSpinner from '@/components/loading/LoadingSpinner';

interface PrivateRouteProps {
  children: React.ReactElement | React.ReactElement[];
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, isLoading } = useAuthState();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (user) {
    if (location.pathname === '/') {
      return <Navigate to="/main" />;
    } else {
      return <>(children)</>;
    }
  } else {
    if (location.pathname === '/') {
      return <>(children)</>;
    } else {
      return <Navigate to="/login" />;
    }
  }
};

export default PrivateRoute;
