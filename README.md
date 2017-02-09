# react-redux-connectme


## How to use 

`
npm install react-redux-connectme --save
`

In your react index file
```javascript
import * as actionsCreators from './actions/actionCreators'
import { addActionCreators } from 'react-redux-connectme'

addActionCreators(actionsCreators)
```

And in all you components that use redux state 
```javascript
import connect from 'react-redux-connectme'

class App extends Component {

  render() {
    return (
      <div
        onClick={this.props.someActionFunction}
      >
        {this.props.someData}
      </div>
    )
  }
}

export default connect(App, (state) => ({
  // add state to connect here, ex:
  someData: state.someData,
  someActionFuncion: state.someActionFunction,
}))

```