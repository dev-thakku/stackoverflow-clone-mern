import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

import './Editor.scss';

function Editor({ value, onChange }) {
  return (
    <div className="editor-container">
      <MDEditor
        value={value}
        onChange={onChange}
        preview="edit"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </div>
  );
}

export default Editor;
