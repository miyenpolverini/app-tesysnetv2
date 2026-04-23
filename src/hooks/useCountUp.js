import { useState, useEffect } from "react";

export function useCountUp(target, started) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setN(target); clearInterval(t); } else setN(cur);
    }, 20);
    return () => clearInterval(t);
  }, [started, target]);
  return n;
}
