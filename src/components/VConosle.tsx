import { useEffect } from 'react';
import VConsole from 'vconsole';

export const DevTools = () => {
  useEffect(() => {
    const vConsole = new VConsole({
      onReady: () => {
        const button = document.querySelector('.vc-switch');
        if (button) {
          button.innerHTML = 'DevTools';
        }
      },
    });

    return () => {
      vConsole.destroy();
    };
  }, []);
  return null;
};
