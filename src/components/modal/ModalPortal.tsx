import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, modalRoot as Element);
};

export default ModalPortal;
