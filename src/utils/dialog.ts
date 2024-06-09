export const openDialog = (id: string) => {
  const dialog = document.getElementById(id) as HTMLDialogElement;
  dialog?.showModal();
};

export const closeDialog = (id: string) => {
  const dialog = document.getElementById(id) as HTMLDialogElement;
  dialog?.close();
};
