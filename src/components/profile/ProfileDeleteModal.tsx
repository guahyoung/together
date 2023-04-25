import propTypes from 'prop-types';
import Modal from '@/components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '@/firebase/auth';
import { useDeleteData } from '@/firebase/firestore/useDeleteData';
import { useDeleteFile } from '@/firebase/storage/useDeleteFile';

const ProfileDeleteModal = ({
  closeProfileDeleteModal,
  profileId,
  storageID,
}) => {
  const navigate = useNavigate();
  const { user } = useAuthState();
  const { deleteData } = useDeleteData('users');
  const { deleteFile } = useDeleteFile('profile');

  const handleProfileDelete = async () => {
    try {
      await deleteData(`${user.uid}/profile/${profileId}`);
      await deleteFile(`profile/${user.uid}/${storageID}/mobile`);

      await closeProfileDeleteModal();
      navigate('/profile-page');
    } catch (error) {
      navigate('/*');
    }
  };

  return (
    <Modal
      message="정말 프로필을 삭제하시겠습니까?"
      onClickHandler={handleProfileDelete}
      cancelHandler={closeProfileDeleteModal}
    />
  );
};

export default ProfileDeleteModal;

ProfileDeleteModal.propTypes = {
  closeProfileDeleteModal: propTypes.func,
  profileId: propTypes.string,
  storageID: propTypes.string,
};
