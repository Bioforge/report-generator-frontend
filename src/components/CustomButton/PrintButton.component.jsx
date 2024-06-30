export default function PrintButtonComponent({ handlePrint }) {
    return (
        <button onClick={handlePrint} className="custom-button print-button">
            Print
        </button>
    );
}
