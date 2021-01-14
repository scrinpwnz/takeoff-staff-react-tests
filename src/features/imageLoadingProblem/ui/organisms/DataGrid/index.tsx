import {CircularProgress, makeStyles, Theme} from "@material-ui/core";
import React, {FC} from 'react'
import {IObject} from "../../../api/dto";
import {TWithImg} from "../../../interfaces";
import ObjectCard from "../../molecules/ObjectCard";

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    data: {
        display: 'grid',
        gridGap: theme.spacing(2),
        gridTemplateColumns: 'repeat(3, 1fr)',
        height: '100%'
    },
    progress: {
        display: 'grid',
        placeItems: 'center',
        height: '100%'
    }
}))

interface Props {
    data: Array<TWithImg<IObject>>
}

const DataGrid: FC<Props> = ({data}) => {

    const classes = useStyles()
    console.log({data})

    return (
        <div className={classes.root}>
            {data.length
                ? <div className={classes.data}>
                    {data.map(object => <ObjectCard object={object}/>)}
                </div>
                : <div className={classes.progress}>
                    <CircularProgress size={120}/>
                </div>}
        </div>
    )
}

export default DataGrid