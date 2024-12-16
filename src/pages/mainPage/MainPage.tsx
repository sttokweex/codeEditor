import React, { useState } from "react";
import { executeCode } from "../../services/api";
import Task from "../../widgets/Task";
import LanguageSelector from "../../features/languageSelector/languageSelector";
import CodeEditor from "../../features/codeEditor/codeEditor";
import ResultDisplay from "../../widgets/ResultDisplay";

const MainPage: React.FC = () => {
  const [language, setLanguage] = useState<string>("python");
  const [result, setResult] = useState<{
    status: string;
    output?: string;
    error?: string;
  }>({ status: "" });
  const [code, setCode] = useState<string>("");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage.toLowerCase());
  };

  const handleRunCode = async () => {
    const executionResult = await executeCode(language, code);
    setResult(executionResult);
  };

  return (
    <div className="app">
      <Task />

      <div className="editor">
        <div className="editor-header">
          <button onClick={handleRunCode} className="run-button">
            Run
          </button>
          <LanguageSelector onLanguageChange={handleLanguageChange} />
        </div>

        <CodeEditor language={language} setCode={setCode} />
        <ResultDisplay result={result} />
      </div>
    </div>
  );
};

export default MainPage;
