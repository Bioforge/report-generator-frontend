import TextField from "@mui/material/TextField";

export default function InputTextComponent({ inputPrompt, windowHeight }) {
    const row = Math.ceil(((windowHeight / 100) * 30) / 30);
    return <TextField readOnly id="outlined-multiline-static" label="Your Prompt" multiline rows={row} value={inputPrompt} fullWidth />;
}
