import useDialog from "@/hooks/useDialog";
import { openDialog } from "@/utils/dialog";

interface ConfirmationDialogProps {
  onSubmit: () => void;
  onClose: () => void;
  isOpen?: boolean;
  id: string;
  title: string;
  message: string;
}

const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const { onSubmit, onClose, isOpen = false, id, message, title } = props;

  useDialog({ id, isOpen });

  const handleCloseDialog = () => {
    openDialog(id);
    onClose();
  };

  return (
    <dialog className="dialog w-[400px] p-8 rounded-lg" id={id}>
      <p className="mb-4">{title}</p>
      <p>{message}</p>
      <div className="flex justify-end gap-4 mt-8">
        <button type="submit" className="btn btn-blue" onClick={onSubmit}>
          Save
        </button>
        <button
          type="button"
          className="btn btn-red"
          onClick={handleCloseDialog}
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
};

export default ConfirmationDialog;
