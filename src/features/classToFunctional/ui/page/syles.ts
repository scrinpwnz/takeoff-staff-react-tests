import {makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        padding: theme.spacing(2,3)
    },
}))