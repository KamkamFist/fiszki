import {useState} from "react";
function Karta( {data, current}){

    const [isFlipped, setIsFlipped] = useState(false);

     function display(data, dataId){
        data.map((item) => console.log(item.id));
        if (data.id == current){
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

export default Karta;