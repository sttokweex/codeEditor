// /src/features/codeEditor/CodeEditor.tsx

import React from "react";
import MonacoEditor from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, setCode }) => {
  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  return (
    <MonacoEditor
      height="73.5%"
      width="95.5%"
      language={language.toLowerCase()}
      onChange={handleCodeChange}
      theme="vs-dark"
      options={{
        selectOnLineNumbers: true,
        automaticLayout: true,
        scrollBeyondLastLine: true,
        wordWrap: "on",
      }}
    />
  );
};

export default CodeEditor;
