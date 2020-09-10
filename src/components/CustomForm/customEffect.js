//Example of custom effect hook (should be enabled in linter)

import {useState, useEffect} from 'react';

export default function useCustomEffect(textValue) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(textValue);
  }, [textValue]);

  return text;
}
