import PropTypes from 'prop-types'

let nombreCompleto = (e) => {
    return e + ' ' + 'rodriguez henriquez'
}
 

const newMessage = {
    nombre: 'perro',
    raza: 'pudul'
}



export const FirstApp = ({title, subTitle}) => {

    console.log(title)
  
    return(
        <>
        <h1>{newMessage.nombre}</h1>
        <p>{title}</p>
        <p>{nombreCompleto('felipe')}</p>
        {/* <p>dsadadadad</p> */}
        <p>{JSON.stringify(newMessage)}</p>
        <p>{subTitle}</p>
        </>
        
    );
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle : PropTypes.string,
}

FirstApp.defaultProps = {
    title:"no hay title",
    subTitle:"holi default props"
}