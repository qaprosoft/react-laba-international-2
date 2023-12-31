import { useEffect, useRef } from 'react';

export function useEffectOnUpdateOnly(
  func: () => void,
  dependency: Array<unknown>,
) {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    func();
  }, dependency);
}
