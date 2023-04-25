import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { useSignOut } from '@/firebase/auth';
import Modal from '@/components/modal/Modal';

const LogoutModal = ({ closeLogoutModal }) => {
  const navigate = useNavigate();
  const { signOut } = useSignOut();

  const handleSignOut = () => {
    signOut();
    closeLogoutModal();
    navigate('/');
  };

  return (
    <Modal
      message="로그아웃 하시겠습니까?"
      onClickHandler={handleSignOut}
      cancelHandler={closeLogoutModal}
    />
  );
};

export default LogoutModal;

LogoutModal.propTypes = {
  closeLogoutModal: propTypes.func,
};
