import React, { Fragment, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

const LoadOnInitial = ({ children }: any) => {
  const [isLoaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (!isLoaded && isVisible) {
      setLoaded(true);
    }
  }, [isLoaded, isVisible]);

  return (
    <div ref={ref}>
      <div className="m-auto max-w-screen-xl space-y-12 py-4 md:py-12 text-center">
        {isLoaded && children}
      </div>
    </div>
  );
};

export default LoadOnInitial;
