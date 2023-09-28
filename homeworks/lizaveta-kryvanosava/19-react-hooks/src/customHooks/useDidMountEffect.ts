import { useEffect, useRef } from 'react';

export function useDidMountEffect(func: () => void, dependency: Array<any>) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, dependency);
}
