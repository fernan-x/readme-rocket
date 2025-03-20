import Editor, { EditorProps } from "react-simple-wysiwyg";

const WysiwygEditor = ({ value, onChange, ...props }: EditorProps) => {
  return <Editor {...props} value={value} onChange={onChange} />;
};

export default WysiwygEditor;
