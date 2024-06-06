export default function CustomButtonComponent({ value, color }) {
  return <button className={`custom-button ${color}`}>{value}</button>;
}
