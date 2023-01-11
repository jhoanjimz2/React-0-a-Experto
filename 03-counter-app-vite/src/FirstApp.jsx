import PropTypes from "prop-types";

// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Jhoan'
// };

// const getResult = (a, b) => {
//     return a + b;
// }

export const FirstApp = ({ title, subTitle, name }) => {


    // if ( !title ) {
    //     throw new Error('El titulo no existe');
    // }


    return (
      <>
        <h1>{ title }</h1>
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>{ subTitle  }</p>
        <p>{ name  }</p>
      </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Jhoan Jimenez',
    title: 'No hay nigun título',
    subTitle: 'No hay nigun sub título',
}

  