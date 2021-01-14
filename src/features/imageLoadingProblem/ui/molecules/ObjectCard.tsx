import {Theme, makeStyles, Paper, Box, Typography} from "@material-ui/core";
import React, {FC} from 'react'
import {TWithImg} from "../../interfaces";
import {IObject} from "../../api/dto";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        maxWidth: 200,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 86.6,
        '&>img': {
            width: '100%'
        }
    },
    name: {

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
                {object.img ? <img src={object.img} alt={''}/> : <div>Загрузка картинки...</div>}
            </div>
            <Box p={1}>
                <Typography variant={'h6'}>
                    {object.name}
                </Typography>
            </Box>
        </Paper>
    )
}

export default ObjectCard