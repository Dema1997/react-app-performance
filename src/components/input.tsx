import { Profiler } from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <Profiler
      id="InputComponent"
      onRender={(
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
      ) => {
        /*  console.log("Profiler: id", id);
        console.log("Profiler: phase", phase);
        console.log("Profiler: actualDuration", actualDuration);
        console.log("Profiler: baseDuration", baseDuration);
        console.log("Profiler: startTime", startTime);
        console.log("Profiler: commitTime", commitTime);
        console.log("Profiler: interactions", interactions); */
        console.log("Profiler: Input Component");
        console.log(baseDuration, "BASE DURATION");
        console.log(baseDuration, "ACTUAL DURATION");
        console.log("------------------------------------------");
      }}
    >
      <input
        onChange={(e) => onChange(e)}
        value={value}
        placeholder={placeholder}
      />
    </Profiler>
  );
};

export { Input };
