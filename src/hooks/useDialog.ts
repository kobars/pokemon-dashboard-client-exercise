import { closeDialog, openDialog } from "@/utils/dialog";
import { useEffect } from "react";

interface UseDialogParams {
  id: string;
  isOpen: boolean;
}

const useDialog = (params: UseDialogParams) => {
  const { id, isOpen } = params;

  useEffect(() => {
    if (isOpen) {
      openDialog(id);
    } else {
      closeDialog(id);
    }
  }, [isOpen, id]);
};

export default useDialog;
