import {Theme, makeStyles, Paper, Box, Typography, CircularProgress} from "@material-ui/core";
import React, {FC} from 'react'
import {TWithImg} from "../../interfaces";
import {IObject} from "../../api/dto";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        overflow: 'hidden',
        gridTemplateRows: 'minmax(80px, 2fr) 1fr'
    },
    image: {
        height: '100%',
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        '&>img': {
            height: '100%',
            width: '100%',
            objectFit: 'cover'
        }
    },
    name: {
        display: 'grid',
        placeItems: 'center'
    }
}))

interface Props {
    object: TWithImg<IObject>
}

const ObjectCard: FC<Props> = ({object}) => {

    const classes = useStyles()

    return (
        <Paper elevation={4} className={classes.root}>
            <div className={classes.image}>
                {object.img
                    ? <img src={object.img} alt={object.name}/>
                    : <CircularProgress color={'secondary'}/>}
            </div>
            <Box className={classes.name} color={'primary.main'}>
                <Typography variant={'h6'}>
                    {object.name}
                </Typography>
            </Box>
        </Paper>
    )
}

export default ObjectCard