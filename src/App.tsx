import React from 'react';
import {Container, CssBaseline} from "@material-ui/core";
import {useStyles} from "./styles";
import ClassToFunctional from "./features/classToFunctional/ui/page";

const App = () => {

    const classes = useStyles()

    return (
        <main className={classes.root}>
            <CssBaseline/>
            <Container fixed maxWidth={'sm'} className={classes.container}>
                <ClassToFunctional/>
            </Container>
        </main>
    );
}

export default App;
