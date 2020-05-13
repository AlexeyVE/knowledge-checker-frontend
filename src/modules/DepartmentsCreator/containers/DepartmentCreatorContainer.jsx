import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DepartmentCreator from '../components/DepartmentCreator'
import { createDepartment } from 'redux/reducers/departmentsReducer'

const DepartmentCreatorContainer = props => {
  return <DepartmentCreator {...props}/>  
}

DepartmentCreatorContainer.propTypes = {

}
const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps,{})(DepartmentCreatorContainer)