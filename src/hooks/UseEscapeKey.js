import React from "react";

export function useEscapeKey(callback) {
  React.useEffect(() => {
    function onKeyDown(evt) {
      if (evt.code === "Escape") {
        callback();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [callback]);
}

export default useEscapeKey;
