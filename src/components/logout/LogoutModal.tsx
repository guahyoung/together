import { useNavigate } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';
import { useSignOut } from '@/firebase/auth';
import Modal from '@/components/modal/Modal';

type LogoutModalProps = {
  closeLogoutModal: () => void;
};

const LogoutModal = ({ closeLogoutModal }: LogoutModalProps): JSX.Element => {
  const navigate = useNavigate();
  const { signOut } = useSignOut();

  const handleSignOut = (): void => {
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
  closeLogoutModal: PropTypes.func.isRequired,
} as InferProps<LogoutModalProps>;
