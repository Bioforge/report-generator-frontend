import PreviousFilesComponent from "../PreviousFiles.component";
import PrintButtonComponent from "../PrintButton.component";

export default function RightSideComponent() {
    return (
        <div className="rightSideContainer">
            <PreviousFilesComponent />
            <PrintButtonComponent />
        </div>
    );
}
