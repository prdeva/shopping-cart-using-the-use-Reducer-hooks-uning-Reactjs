import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './components/cart';
// import cart from './cart';

class App extends React.Component{
  render(){
    return(
      <div>
        <Cart />
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
