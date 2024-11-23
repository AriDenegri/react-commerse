function  Button({color, texto, callback}){
    return(
        <button style={{backgroundColor: color}} onClick={callback}>
            {texto}
            </button>
    )
}

export default Button