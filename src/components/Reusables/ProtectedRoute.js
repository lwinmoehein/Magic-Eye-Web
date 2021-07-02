import React from 'react'
import { Redirect,Route} from "react-router-dom";


const ProtectedRoute =({ component: Component,user, ...rest })=> {
    return (
    <Route {...rest} render={
        props => {
            if (user) {
              return <Component {...rest} {...props} />
            } else {
              return <Redirect to={
                {
                  pathname: '/login',
                  state: {
                    from: props.location
                  }
                }
              } />
            }
        }
      } />
    )
}

export default ProtectedRoute;

