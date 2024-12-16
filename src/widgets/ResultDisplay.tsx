// /src/widgets/ResultDisplay.tsx

import React from "react";

interface Result {
  status: string;
  output?: string;
  error?: string;
}

interface ResultDisplayProps {
  result: Result;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div className={`result-display ${result.status}`}>
      {result.status === "success" ? (
        <pre>{result.output}</pre>
      ) : (
        <pre>{result.error}</pre>
      )}
    </div>
  );
};

export default ResultDisplay;
