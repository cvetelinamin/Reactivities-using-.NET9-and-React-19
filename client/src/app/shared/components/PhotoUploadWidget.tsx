import { Grid, Typography } from "@mui/material";

export default function PhotoUploadWidget() {
    return (
        <Grid container spacing={3}>
            <Grid size={4}>
                <Typography variant="overline" color="secondary">Setp 1 - Add photo</Typography>
            </Grid>
            <Grid size={4}>
                <Typography variant="overline" color="secondary">Setp 2 - Resize image</Typography>
            </Grid>
            <Grid size={4}>
                <Typography variant="overline" color="secondary">Setp 3 - Preview & upload</Typography>
            </Grid>
        </Grid>
    )
}