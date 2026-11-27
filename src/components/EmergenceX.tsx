import React from 'react';

interface EmergenceXProps {
  className?: string;
  xClassName?: string;
  uppercase?: boolean;
}

export const EmergenceX: React.FC<EmergenceXProps> = ({
  className = "",
  xClassName = "text-[#E02B20] text-[1.22em] font-black leading-none",
  uppercase = true,
}) => {
  return (
    <span className={className}>
      {uppercase ? "EMERGENCE" : "Emergence"}
      <span className={xClassName}>X</span>
    </span>
  );
};

export const formatEmergenceXText = (text: string) => {
  if (text.includes("EmergenceX")) {
    const parts = text.split("EmergenceX");
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span>
                Emergence<span className="text-[#E02B20] text-[1.2em] font-black">X</span>
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  }
  if (text.includes("EMERGENCEX")) {
    const parts = text.split("EMERGENCEX");
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span>
                EMERGENCE<span className="text-[#E02B20] text-[1.22em] font-black">X</span>
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  }
  return text;
};
