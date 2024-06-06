export default function CustomTextArea({ value, placeholder }) {
  return (
    <textArea readOnly placeholder={placeholder} className="custom-area">
      {value}
    </textArea>
  );
}
