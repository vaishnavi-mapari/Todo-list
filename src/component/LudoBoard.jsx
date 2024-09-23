import React, {useState} from 'react'

const LudoBoard = () => {

    let [isliked, setIsLiked]=useState(false); 

    const handleIsLiked=()=>{
        setIsLiked(!isliked);
        console.log('IsLiked Called'); // Function for liked or not
    };

    let [moves, setMoves]=useState({red:0, green:0, blue:0, yellow: 0});

    // Function for all moves 
    const handleBlueMoves=()=>{
        if (moves.blue>=10){
            alert("You are done with your moves");
        }
        else{
        const up = moves.blue+=1;
        setMoves({...moves,up}); 
    }
    };

    const handleGreenMoves=()=>{
        if (moves.green>=10){
            alert("You are done with your moves");
        }
        else{
        const up = moves.green+=1;
        setMoves({...moves,up});
        }
    };

    const handleRedMoves=()=>{
        if (moves.red>=10){
            alert("You are done with your moves");
        }
        else{
        const up = moves.red+=1;
        setMoves({...moves,up});
        }
    };

    const handleYellowMoves=()=>{
        if (moves.yellow>=10){
            alert("You are done with your moves");
        }
        else{
        const up = moves.yellow+=1;
        setMoves({...moves,up});
        }
    };

  return (
    <div className="text-center">
      <h1>WelCome to LudoBoard <span onClick={handleIsLiked} className='mx-3' style={{color:'red'}}>{isliked==true?(<i class="fa-solid fa-heart"></i>):(<i class="fa-regular fa-heart"></i>)}</span></h1>      
      <h6 style={{color:'blue', textAlign:'center'}}>Blue: {moves.blue}</h6>
      <button className="btn btn-primary" onClick={handleBlueMoves} >+1</button>
    
      <h6 style={{color:'red' }}>Red: {moves.red}</h6>
      <button className="btn btn-danger"  onClick={handleRedMoves}>+1</button>
      <h6 style={{color:'green' }}>Green: {moves.green}</h6>
      <button className="btn btn-success" onClick={handleGreenMoves}>+1</button>
      <h6 style={{color:'yellow'}}>Yellow: {moves.yellow}</h6>
      <button className="btn btn-warning" onClick={handleYellowMoves}  >+1</button>
    </div>
  )
}

export default LudoBoard


// spread operator ( ... ) thatstore the new value or copied the new value and store it into one varible