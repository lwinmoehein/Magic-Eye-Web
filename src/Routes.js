    import React from 'react'
    import Home from './pages/Home'
    import About from './pages/About'
    import Courses from './pages/Courses'
    import { Route,Switch } from "react-router-dom"


    function Routes() {
        return (
            <Switch>
                <Route path="/about">
                <About />
                </Route>
                <Route path="/courses">
                <Courses />
                </Route>
                <Route path="/">
                <Home />
                </Route>
          </Switch>
        )
    }
    
    export default Routes
    