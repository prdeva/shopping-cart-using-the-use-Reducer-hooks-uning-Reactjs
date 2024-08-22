import React, { useReducer } from 'react';
import './style.css';
import apple from './apple.png';
import orange from './orrange.png';
import dragon from './dragon.png';
import grape from './grape.png';

// Initial state for each fruit step 1
const initialState = { appleCount: 0, orangeCount: 0, dragonCount: 0, grapeCount: 0 };
//step 2

function reducer(state, action) {
  switch (action.category) {
    case 'incrementApple':
      return { ...state, appleCount: state.appleCount + 1 };
    case 'decrementApple':
      return { ...state, appleCount: state.appleCount-1 }; 
    case 'resetApple':
      return { ...state, appleCount: 0 };

    case 'incrementOrange':
      return { ...state, orangeCount: state.orangeCount + 1 };
    case 'decrementOrange':
      return { ...state, orangeCount:state.orangeCount-1  };
    case 'resetOrange':
      return { ...state, orangeCount: 0 };

    case 'incrementDragon':
      return { ...state, dragonCount: state.dragonCount + 1 };
    case 'decrementDragon':
      return { ...state, dragonCount:state.dragonCount - 1 };
    case 'resetDragon':
      return { ...state, dragonCount: 0 };

    case 'incrementGrape':
      return { ...state, grapeCount: state.grapeCount + 1 };
    case 'decrementGrape':
      return { ...state, grapeCount: state.grapeCount - 1 };
    case 'resetGrape':
      return { ...state, grapeCount: 0 };

    default:
      throw new Error();
  }
}

function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='full'>
      <h3 className='h3'>Fruits</h3>
      
      <div className='div1'>
        <h6 className='fname'>Green Apple</h6>
        <img src={apple} alt='Green Apple' className='apple' />
        <p className='tit'>Number of Kg: {state.appleCount}</p>
        <button onClick={() => dispatch({ category: 'decrementApple' })} className='bt1'>-</button>
        <button onClick={() => dispatch({ category: 'incrementApple' })} className='bt2'>+</button>
        <button onClick={() => dispatch({ category: 'resetApple' })} className='bt3'>Reset</button>
      </div>
      
      <div className='div2'>
        <h6 className='fname'>Orange</h6>
        <img src={orange} alt='Orange' className='apple' />
        <p className='tit'>Number of Kg: {state.orangeCount}</p>
        <button onClick={() => dispatch({ category: 'decrementOrange' })} className='bt1'>-</button>
        <button onClick={() => dispatch({ category: 'incrementOrange' })} className='bt2'>+</button>
        <button onClick={() => dispatch({ category: 'resetOrange' })} className='bt3'>Reset</button>
      </div>
      
      <div className='div3'>
        <h6 className='fname'>Dragon</h6>
        <img src={dragon} alt='Dragon' className='apple' />
        <p className='tit'>Number of Kg: {state.dragonCount}</p>
        <button onClick={() => dispatch({ category: 'decrementDragon' })} className='bt1'>-</button>
        <button onClick={() => dispatch({ category: 'incrementDragon' })} className='bt2'>+</button>
        <button onClick={() => dispatch({ category: 'resetDragon' })} className='bt3'>Reset</button>
      </div>
      
      <div className='div4'>
        <h6 className='fname'>Grape</h6>
        <img src={grape} alt='Grape' className='apple' />
        <p className='tit'>Number of Kg: {state.grapeCount}</p>
        <button onClick={() => dispatch({ category: 'decrementGrape' })} className='bt1'>-</button>
        <button onClick={() => dispatch({ category: 'incrementGrape' })} className='bt2'>+</button>
        <button onClick={() => dispatch({ category: 'resetGrape' })} className='bt3'>Reset</button>
      </div>
      
     
    </div>
  );
}

export default Cart;
