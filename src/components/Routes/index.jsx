import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route ,Switch } from 'react-router-dom'
import { Home } from 'components'
import { TaskCreationForm, DepartmentsCreator } from 'modules'

const Routes = props => {
  return (
   <Fragment>
     <Switch>
       <Route exact path = "/" component = { Home }/> 
       <Route path = "/create-task" component = { TaskCreationForm } />
       <Route path = "/departments" component = { DepartmentsCreator } />
       <Route path = "/tasks-formation" component = { DepartmentsCreator } />
       <Route path = "/results" component = { DepartmentsCreator } />
     </Switch>
   </Fragment>  
  )
}

Routes.propTypes = {

}

export default Routes