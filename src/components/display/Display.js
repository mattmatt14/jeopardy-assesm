function Display(props)  {
    return (
    


<div>
<h6>{props.score}</h6>
<h6>{props.question}</h6>
<h6>{props.category}</h6>
<h6>{props.value}</h6>
<form>
  <input type='text' value={props.answer} onChange={props.handleChange} />
  <button onClick={props.updateScore}>Submit</button>
</form>
</div>
    )
}

export default Display;