import { useEffect, useState } from "react";

type KeyPressCombo = {
  keyCombo: string[];
  callback: () => void;
};

export const useKeyPressCombo = (keyCombos: KeyPressCombo[]) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      setPressedKeys((prevKeys) => [...prevKeys, key]);

      for (const combo of keyCombos) {
        const { keyCombo, callback } = combo;
        if (keyCombo.every((comboKey) => pressedKeys.includes(comboKey))) {
          callback();
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const { key } = event;
      setPressedKeys((prevKeys) =>
        prevKeys.filter((prevKey) => prevKey !== key)
      );
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyCombos, pressedKeys]);

  return pressedKeys;
};
