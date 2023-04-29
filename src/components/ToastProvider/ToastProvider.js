import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, variant) => {
    const id = crypto.randomUUID();
    setToasts((currentToasts) => [...currentToasts, { id, message, variant }]);
  }, []);

  const removeToast = React.useCallback(
    (id) =>
      setToasts((currentToasts) =>
        currentToasts.filter((toast) => toast.id !== id)
      ),
    []
  );

  const removeAll = React.useCallback(() => setToasts([]), []);

  const providerData = React.useMemo(
    () => ({ toasts, addToast, removeToast, removeAll }),
    [toasts, addToast, removeToast, removeAll]
  );

  return (
    <ToastContext.Provider value={providerData}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
