import { Button } from "@mui/material";
import { Print } from "@mui/icons-material";

export default function PrintButtonComponent() {
    return (
        <Button fullWidth variant="contained" endIcon={<Print />}>
            Print
        </Button>
    );
}
