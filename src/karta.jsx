import {useState} from "react";
function karta( {data}){

    const [isFlipped, setIsFlipped] = useState(false);

     function display(data, dataId){
        if (data.id === dataId){
            return (
                <div >
                    {isFlipped ? <h3>{data.answer}</h3>  : <h2>{data.question}</h2>}
                    
                </div>
            )
        }
    }
    function Flipper(){
        setIsFlipped(!isFlipped);
    }
    
    return(
        <>
            <div className="fiszka" onClick={Flipper}>

                {display(data , data.id)} 
    
        </ div> 
        </>

    )

}

export default karta;