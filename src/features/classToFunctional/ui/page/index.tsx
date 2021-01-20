import {Box, Button, Divider, Paper, Typography} from "@material-ui/core";
import React, {FC, useState} from 'react'
import DataTable from "../organisms/DataTable";
import {useStyles} from "./syles";

const ClassToFunctional: FC = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Paper elevation={6} className={classes.root}>
            <Box className={classes.taskContainer}>
                <Typography variant={'h4'} color={'secondary'}>
                    TypeScript
                </Typography>
                <Typography variant={'h6'} color={'primary'}>
                    Задание 1
                </Typography>
                <Typography variant={'body2'}>
                    Переписать компонент в классовом стиле в функциональный.
                </Typography>
            </Box>
            <Divider/>
            <div className={classes.testContainer}>
                {open
                    ? <DataTable onClose={handleClose}/>
                    : <Button variant={'contained'} color={'primary'} onClick={handleOpen}>
                        Открыть таблицу
                    </Button>}
            </div>
        </Paper>
    )
}

export default ClassToFunctional