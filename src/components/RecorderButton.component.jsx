import { Button } from "@mui/material";
import { MicOutlined, MicOffOutlined } from "@mui/icons-material";

export default function RecorderButtonComponent() {
    return (
        <Button fullWidth variant="contained" endIcon={<MicOutlined />}>
            Record
        </Button>
    );
}
