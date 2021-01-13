import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const styles = (theme: Theme) => createStyles({
    root: {
        height: 'fit-content',
        width: 400,
        padding: theme.spacing(2,3)
    },
    tableContainer: {
        marginTop: theme.spacing(2),
    },
    table: {
        display: 'grid',
        maxHeight: 300,
        overflow: 'auto',
        '&>div': {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            '&>div': {
                padding: theme.spacing(.5,1)
            }
        },
        '&>div:nth-child(2n)': {
            background: theme.palette.background.default
        }
    },
    progress: {
        display: 'grid',
        placeItems: 'center',
        padding: theme.spacing(2, 0)
    },
    lastUpdate: {
      marginTop: theme.spacing(1)
    },
    buttons: {
        display: 'grid',
        marginTop: theme.spacing(2),
        gridAutoFlow: 'columns',
        gridGap: theme.spacing(1)
    },
});

/** Хук для функционального стиля
 * Использование: const classes = useStyles()
 * */
export const useStyles = makeStyles(styles)