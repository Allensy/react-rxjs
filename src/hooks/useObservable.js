import { useEffect, useState } from "react";

const useObservable = (observable, initialValue) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};

export { useObservable };
