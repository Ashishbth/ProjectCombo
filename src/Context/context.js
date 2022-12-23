import { createContext, useState } from "react";


const Context = createContext();

const Provider = ({children})=>{
    const [res , setRes] = useState(null);
    const [input , setInput] = useState();
    const[value1 , setValue1] = useState(0);
    const[value2 , setValue2] = useState(0);
    
    

    const easy = ()=>{
            setValue1( Math.floor(Math.random() * 10));
            setValue2( Math.floor(Math.random() * 10));
    };
    const medium = ()=>{
        setValue1( Math.floor(Math.random() * 100));
        setValue2( Math.floor(Math.random() * 100));
    };
    const hard = ()=>{
        setValue1( Math.floor(Math.random() * 1000));
        setValue2( Math.floor(Math.random() * 1000));
    };
    const advance = ()=>{
        setValue1( (Math.random() * 100));
        setValue2( (Math.random() * 100));
    };

    
    function add(num){
        console.log(num);
    }
    
    
    
    const onStart = ()=>{
        
    };
   
    


    const valueToShare = {
        name : 'Ashish',
        value1 ,
        value2 ,
        res,
        input,
        setInput,
        setRes,
        easy,
        medium,
        hard,
        advance,
        onStart,
        add,
    };

    return(
        <Context.Provider value={valueToShare}>
            {children}
        </Context.Provider>
    )
}


export {Provider};
export default Context;