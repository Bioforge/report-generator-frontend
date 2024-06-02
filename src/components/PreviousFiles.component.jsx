import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function PreviousFilesComponent() {
    return (
        <List className="previousFilesContainer">
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Mehedi Hassan" src="/random" />
                </ListItemAvatar>
                <ListItemText
                    primary="Md. Mehedi Hassan"
                    secondary={
                        <>
                            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                6th April 2024
                            </Typography>
                            {" — This report is about the X-ray of chest and the report contains various details about it…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <>
                            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <>
                            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                Sandra Adams
                            </Typography>
                            {" — Do you have Paris recommendations? Have you ever…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <>
                            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <>
                            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <>
                            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                Sandra Adams
                            </Typography>
                            {" — Do you have Paris recommendations? Have you ever…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <>
                            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                Sandra Adams
                            </Typography>
                            {" — Do you have Paris recommendations? Have you ever…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <>
                            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                Sandra Adams
                            </Typography>
                            {" — Do you have Paris recommendations? Have you ever…"}
                        </>
                    }
                />
            </ListItem>
        </List>
    );
}
