import React from "react";
import { useState } from "react";
import { Input } from "./input";

const initialState: string[] = ["Parola 1", "Parola 2", "Parola 3"];

const Main = () => {
  const [words, setWords] = useState<string[]>(initialState);

  return (
    <>
      <h1>Optimizing Performance</h1>

      {words.toString()}

      <div style={{ flexDirection: "row", marginTop: 30 }}>
        {words.map((word, i) => {
          return (
            <Input
              onChange={(e) => {
                const newArray = words.map((el, j) =>
                  i === j ? e.currentTarget.value : el
                );
                setWords(newArray);
              }}
              value={word}
              placeholder={word}
            />
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Main);
