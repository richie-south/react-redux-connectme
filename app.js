import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

let globalActionCreators = null

const mapDispatchToProps = (dispatch) => bindActionCreators(globalActionCreators, dispatch) 

export default (Element, stateToProps) => 
  connect(
    stateToProps, 
    mapDispatchToProps
  )(Element)

export const addActionCreators = (actionsCreators) => globalActionCreators = actionsCreators