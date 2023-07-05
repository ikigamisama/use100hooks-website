import { useStickyEffect } from "use100hooks";
import { useRef } from "react";

const StickyEffect = () => {
  const ref = useRef(null);
  const isSticky = useStickyEffect(ref, { threshold: 100 });

  return (
    <div>
      <div ref={ref}>Content Sticky</div>
      {isSticky && <div>Yikes it's Sticky</div>}
    </div>
  );
};
export default StickyEffect;
