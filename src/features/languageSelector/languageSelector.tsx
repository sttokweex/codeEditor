import React from "react";

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
}) => {
  const languages = ["Python", "Go"];

  return (
    <select
      onChange={(e) => onLanguageChange(e.target.value)}
      className="selectLang"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
