import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getTrombinoscope} from '../../actions/trombinoscope';

const Trombinoscope = (props) =>{

    
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(getTrombinoscope());
     }, [])
     const trombinoscopeList = useSelector(state => state.trombinoscope.list)


    
    return(
        <div>
                {trombinoscopeList.map((item) => (
                    <div key={item.name}>
                        <p>{item.name}</p> 
                        <img  width="200px" src={item.image}/>
                    </div>

                ))}
        </div>
    )
}

export default Trombinoscope