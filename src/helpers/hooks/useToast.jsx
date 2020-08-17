import { useToasts } from "react-toast-notifications";
const useToast = () => {
  const { addToast } = useToasts();
  const showToast = (text, type) => {
    addToast(text, {
      appearance: type,
      autoDismiss: true,
      autoDismissTimeout: 1000
    });
  };
  return { showToast };
};

export default useToast;
