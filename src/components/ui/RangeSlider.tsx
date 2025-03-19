import React, { useState, useRef, useEffect } from "react";

interface RangeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateValue(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateValue(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateValue = (e: MouseEvent | React.MouseEvent) => {
    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percentage = Math.min(
        Math.max((offsetX / rect.width) * 100, 0),
        100,
      );
      onChange(percentage);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="w-[200px] h-0.5 relative bg-[#CCC2C2] mt-2"
      ref={trackRef}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute h-full bg-[#222]"
        style={{ width: `${value}%` }}
      />
      <div
        className="w-2.5 h-2.5 absolute cursor-pointer bg-white rounded-[50%] border-2 border-solid border-black -top-1"
        style={{ left: `${value}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default RangeSlider;
