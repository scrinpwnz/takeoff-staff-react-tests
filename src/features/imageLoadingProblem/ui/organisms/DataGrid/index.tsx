import {Theme, makeStyles} from "@material-ui/core";
import React, {FC} from 'react'
import {IObject} from "../../../api/dto";
import {TWithImg} from "../../../interfaces";
import ObjectCard from "../../molecules/ObjectCard";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        gridGap: theme.spacing(2),
        gridTemplateColumns: 'repeat(3, 1fr)'

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
            {data.length ? data.map(object => <ObjectCard object={object}/>) : "Первая загрузка..."}
        </div>
    )
}

export default DataGrid