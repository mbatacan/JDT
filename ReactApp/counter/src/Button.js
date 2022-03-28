function Button(props){
    return(
        <button onClick={props.myclicker}>
            {props.name}
        </button>
    )
}

export default Button;