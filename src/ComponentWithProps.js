import PropTypes from 'prop-types';


// export const ComponentWithProps = (attr1, attr2, attr3) => {
//     return <p>this is a custom component that accepts props: {attr1} {attr2} {attr3}</p>
// }

// export const ComponentWithProps = (props) => {
//     return <p>this is a custom component that accepts props: {props.attr1} {props.attr2} {props.attr3}</p>
// }



export const ComponentWithProps = ({attr1, attr2, attr3}) => {

    // if (!attr1) {
    //     return <p>please give me attr1</p>
    // }
    return <>
        <p>this is a custom component that accepts props: {attr1} {attr2} {attr3}</p>
        <p>(but we don't refer to them as "props" literally, we use object destructuring instead)</p>
    </>

}

ComponentWithProps.propTypes = {
    attr1: PropTypes.string.isRequired,
    attr2: PropTypes.string,
    attr3: PropTypes.string,
}

ComponentWithProps.defaultProps = {
    attr2: 'default value for attr2',
    attr3: 'default value for attr3'
}


// const me = {
//     fn: 'R',
//     ln: "n"
// }

// const {fn, ln} = me;