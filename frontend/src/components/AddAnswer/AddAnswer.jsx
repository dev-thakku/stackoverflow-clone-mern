import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

import Editor from '../Editor/Editor';
import './AddAnswer.scss';
import Button from '../Button/Button';
import rehypeSanitize from 'rehype-sanitize';

function AddAnswer() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="addAnswer">
      <div className="addAnswer__header">Your Answer</div>
      <Editor value={markdown} onChange={setMarkdown} />
      <MDEditor.Markdown source={markdown} rehypePlugins={[[rehypeSanitize]]} />
      <Button primary>Add Answer</Button>
    </div>
  );
}

export default AddAnswer;
