import React, {FC} from 'react';
import {Box, Button, CircularProgress, Divider, Paper, Typography, withStyles, WithStyles} from "@material-ui/core";
import {useStyles} from "./styles";
import {fetchData} from "../../../api";
import {IData} from "../../../api/dto";
import {format} from 'date-fns';

interface Props {
    onClose: () => void
}

const DataTableFunctional: FC<Props> = ({onClose}) => {

    const classes = useStyles()

    return (
        <div>Я функциональный компонент. Привет!</div>
    )
}

export default DataTableFunctional
