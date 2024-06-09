import { FormEvent, PropsWithChildren } from "react";
import useDialog from "@/hooks/useDialog";

interface FormDialogProps extends PropsWithChildren {
  id: string;
  title: string;
  isOpen?: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

const FormDialog = (props: FormDialogProps) => {
  const { id, children, title, isOpen = false, onSubmit, onCancel } = props;

  useDialog({ id, isOpen });

  return (
    <dialog className="dialog w-[400px] p-8 rounded-lg" id={id}>
      <p className="mb-4">{title}</p>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        {children}
        <div className="flex justify-end gap-4">
          <button type="submit" className="btn btn-blue">
            Save
          </button>
          <button type="button" className="btn btn-red" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default FormDialog;
