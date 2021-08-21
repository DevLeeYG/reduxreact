import React from 'react';
import { connect } from 'react-redux'

import Counter from '../component/Counter' //nmber,increase,decrease 프롭
import {increase,decrease} from '../modules/counter'

const CounterContainer = ({number, increase,decrease}) => {
    return (
        <div>
            <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
        </div>
    );
};



export default connect(
    function(state){return({number:state.counter.number,})},
 
   
        {
            increase,
            decrease,
        },
      
    )(CounterContainer)

     // dispatch =>({
    //     increase: () => dispatch(increase()),
    //     decrease: () => dispatch(decrease())
    // })



