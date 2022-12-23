import { createContext, useState } from "react";


const Context = createContext();

const Provider = ({children})=>{
    const [res , setRes] = useState(null);
    const [input , setInput] = useState(0);
    const[value1 , setValue1] = useState(0);
    const[value2 , setValue2] = useState(0);
    const [marks , setMarks] =useState(0);
    

    const easy = ()=>{
            setValue1( Math.floor(Math.random() * 10));
            setValue2( Math.floor(Math.random() * 10));
            setInput(0);
    };
    const medium = ()=>{
        setValue1( Math.floor(Math.random() * 100));
        setValue2( Math.floor(Math.random() * 100));
        setInput(0);
    };
    const hard = ()=>{
        setValue1( Math.floor(Math.random() * 1000));
        setValue2( Math.floor(Math.random() * 1000));
        setInput(0);
    };
    const advance = ()=>{
        setValue1( (Math.random() * 100));
        setValue2( (Math.random() * 100));
        setInput(0);
    };

    
    function add(num){
        // console.log(num);
        if((input === num) && (input !== 0)){
            setMarks(marks+1);
            // console.log(input);
            console.log('Correct' , num);
        }else{
            console.log('Incorrect' , num ,' ' , input);
        };
    };
    
    
    
    
   
    


    const valueToShare = {
        name : 'Ashish',
        value1 , value2 ,
        res,  setRes,
        input,setInput,
        easy,medium,hard,advance,
        add,
        marks
    };

    return(
        <Context.Provider value={valueToShare}>
            {children}
        </Context.Provider>
    )
}


export {Provider};
export default Context;