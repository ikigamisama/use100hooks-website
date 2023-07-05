import { useEffect, useState } from "react";

type UUIDVersion = "v1" | "v4" | "guid";

export const useUIDgenerator = (version: UUIDVersion) => {
  const [uid, setUid] = useState<string>("");

  useEffect(() => {
    let randomGenerateString = Math.random().toString(36).substring(2);

    if (version === "v1") {
      const timestamp = new Date().getTime().toString(16),
        randomString = randomGenerateString.substring(0, 12);

      setUid(`${timestamp}-${randomString}`);
    } else if (version === "v4") {
      setUid(
        `${randomGenerateString}-${randomGenerateString}-${randomGenerateString}-${randomGenerateString}`
      );
    } else if (version === "guid") {
      let guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          const r = (Math.random() * 16) | 0;
          const v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
      setUid(guid);
    }
  }, [version]);

  return uid;
};
