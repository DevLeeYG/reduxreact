import React ,{useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Counter from '../component/Counter' //nmber,increase,decrease 프롭
import {increase,decrease} from '../modules/counter'

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number)
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=>dispatch(increase()),[dispatch])
    const onDecrease = useCallback(()=>dispatch(decrease()),[dispatch])
   
    return (
        <div>
            <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
        </div>
    );
};

export default React.memo(CounterContainer)

// export default connect(
//     function(state){return({number:state.counter.number,})},
 
   
//         {
//             increase,
//             decrease,
//         },
      
//     )(CounterContainer)

     // dispatch =>({
    //     increase: () => dispatch(increase()),
    //     decrease: () => dispatch(decrease())
    // })



