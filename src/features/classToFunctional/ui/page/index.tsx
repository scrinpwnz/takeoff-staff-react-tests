import {Button} from "@material-ui/core";
import React, {FC, useState} from 'react'
import DataTable from "../organisms/DataTable";
import {useStyles} from "./syles";

interface Props {

}

const ClassToFunctional: FC<Props> = props => {

    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div className={classes.root}>
            {open
                ? <DataTable onClose={handleClose}/>
                : <Button variant={'contained'} color={'primary'} onClick={handleOpen}>
                    Открыть таблицу
                </Button>}

        </div>
    )
}

export default ClassToFunctional