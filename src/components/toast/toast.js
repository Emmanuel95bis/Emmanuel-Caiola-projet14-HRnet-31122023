//installer le package :
//yarn add react-toastify

//ne pas oublié dans le render d'ajouter <Toast />
import {
  ToastContainer as LocalToastContainer,
  Slide,
  toast,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const toastError = (message) =>
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
  });

export const toastSuccess = (message) =>
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "colored",
  });

export const Toast = () => {
  return <LocalToastContainer transition={Slide} />;
};
