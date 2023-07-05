import { useKeyPressCombo } from "use100hooks";
import { useEffect, useState } from "react";

const KeypressCombo = () => {
  const [isCombo, setIsCombo] = useState(false);
  const handleCombo = () => {
    console.log("Secret combo activated!");
    setIsCombo(true);
  };

  useKeyPressCombo([
    { keyCombo: ["Control", "Shift", "K"], callback: handleCombo },
  ]);

  useEffect(() => {
    if (isCombo === true) {
      setTimeout(() => {
        setIsCombo(false);
      }, 2000);
    }
  }, [isCombo]);

  return (
    <div>
      <p>Press and hold Control + Shift + K to activate the secret combo!</p>
      <p>Is Combo Active {isCombo.toString()}</p>
    </div>
  );
};
export default KeypressCombo;
