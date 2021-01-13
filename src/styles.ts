import {makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        overflow: 'hidden',
        minHeight: '100vh'
    },
    container: {
        height: '100%',
        padding: theme.spacing(2, 0)
    }
}))