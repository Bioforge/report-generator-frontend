import TextField from "@mui/material/TextField";

export default function ResponseTextComponent({ responsePrompt, windowHeight }) {
    const row = Math.ceil(((windowHeight / 100) * 70) / 30);
    return <TextField readOnly id="outlined-multiline-static" label="Response" multiline rows={row} value={responsePrompt} fullWidth />;
}
