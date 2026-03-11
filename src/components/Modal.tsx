import "./Modal.css";

type ModalProps = {
  open: boolean;
  title?: string;
  message: string;
  onClose: () => void;
};

const Modal = ({ open, title, message, onClose }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="modal-title">{title}</h2>}
        <p className="modal-message">{message}</p>
        <button className="modal-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
