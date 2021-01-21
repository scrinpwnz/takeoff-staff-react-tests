import React, {FC, useEffect, useState} from 'react'
import {useStyles} from "./styles";
import {Box, Divider, Paper, Typography} from "@material-ui/core";
import DataGrid from "../organisms/DataGrid";
import {IObject} from "../../api/dto";
import {addImageUrlToObject, fetchObjects} from "../../api";
import {TWithImg} from "../../interfaces";

const ImageLoadingProblem: FC = () => {

    const classes = useStyles()

    const [data, setData] = useState<Array<TWithImg<IObject>>>([])
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (isDataLoaded) {
            loadImages()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDataLoaded])

    const fetchData = async () => {
        setIsDataLoaded(false)
        const objects = await fetchObjects()
        setData(objects)
        setIsDataLoaded(true)
    }

    const loadImages = () => {
        Promise.all(data.map(async (item, index) => {
            const newData = [...data]
            newData[index] = await addImageUrlToObject(newData[index])
            setData(newData)
        }))
    }

    return (
        <Paper elevation={6} className={classes.root}>
            <Box className={classes.taskContainer}>
                <Typography variant={'h4'} color={'secondary'}>
                    TypeScript
                </Typography>
                <Typography variant={'h5'} color={'primary'}>
                    Задание 2
                </Typography>
                <Typography variant={'body2'}>
                    Решить проблему с загрузкой картинок.
                </Typography>
            </Box>
            <Divider/>
            <div className={classes.testContainer}>
                <DataGrid data={data}/>
            </div>
        </Paper>
    )
}

export default ImageLoadingProblem
