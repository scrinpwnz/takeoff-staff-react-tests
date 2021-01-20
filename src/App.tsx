import React from 'react';
import {AppBar, Button, Container, CssBaseline, Toolbar} from "@material-ui/core";
import {useStyles} from "./styles";
import ClassToFunctional from "./features/classToFunctional/ui/page";
import ImageLoadingProblem from "./features/imageLoadingProblem/ui/page";
import {Route, Switch, useHistory} from "react-router";
import MainPage from "./features/mainPage/ui/page";

const App = () => {

    const classes = useStyles()
    const history = useHistory()

    const handleMainPageButton = () => {
        history.push('/')
    }

    return (
        <main className={classes.root}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <Button className={classes.mainButton} color={'inherit'} onClick={handleMainPageButton}>
                        Главная
                    </Button>
                </Toolbar>
            </AppBar>
            <Container fixed maxWidth={'md'} className={classes.container}>
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/task-1">
                        <ClassToFunctional/>
                    </Route>
                    <Route path="/task-2">
                        <ImageLoadingProblem/>
                    </Route>
                </Switch>
            </Container>
        </main>
    );
}

export default App;
