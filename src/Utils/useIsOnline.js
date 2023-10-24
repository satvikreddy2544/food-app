import { useState, useEffect } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  function handleOnline() {
    setIsOnline(true);
    console.log('came online');
  }
  function handleOffline() {
    setIsOnline(false);
    console.log("went ofline")
  }
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);


    return ()=>{
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
    }
  }, []);

  return isOnline;
};

export default useIsOnline;
