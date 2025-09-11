import type { AnalogClockProps } from '../interfaces/AnalogClock';
import { useEffect, useRef } from 'react';
import clockAnimation from './clockAnimation';

export default function AnalogClock(props: AnalogClockProps) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const requestAnimationFrameHolder =
      clockAnimation({
        canvas: canvasRef.current,
        ...props
      });

    return () => cancelAnimationFrame(requestAnimationFrameHolder.latest);
  }, [props]);

  return <>
    <div className="analogclock-container-outer">
      <div className="analogclock-container">
        <canvas ref={canvasRef} width="500" height="500"></canvas>
      </div>
    </div>
  </>;
}