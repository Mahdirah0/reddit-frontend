import React from 'react';

type ITextArea = {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent) => void;
};

const TextArea = ({ value, placeholder, onChange }: ITextArea) => {
  return (
    <textarea placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default TextArea;
