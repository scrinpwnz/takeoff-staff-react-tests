import React, {FC, useEffect, useState} from 'react'
import {useStyles} from "./syles";
import {Paper} from "@material-ui/core";
import DataGrid from "../organisms/DataGrid";
import {IObject} from "../../api/dto";
import {fetchObjects, addImageUrlToObject} from "../../api";
import {TWithImg} from "../../interfaces";

interface Props {

}

const ImageLoadingProblem: FC<Props> = props => {

    const classes = useStyles()

    const [data, setData] = useState<Array<TWithImg<IObject>>>([])
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log('Загрузка картинок')
        if (isDataLoaded) {
            loadImages()
        }
    }, [isDataLoaded])

    const fetchData = async () => {
        setIsDataLoaded(false)
        const objects = await fetchObjects()
        setData(objects)
        setIsDataLoaded(true)
    }

    const loadImages = () => {
        Promise.all(data.map(async (item, index) => {
            // const newData = [...data]
            // newData[index] = await addImageUrlToObject(data[index])
            // setData(data)
            const objectWithImg = await addImageUrlToObject(data[index])
            setData(prevData => {
                prevData[index] = objectWithImg
                return [...prevData]
            })
        }))
    }

    return (
        <Paper elevation={6} className={classes.root}>
            <DataGrid data={data}/>
        </Paper>
    )
}

export default ImageLoadingProblem