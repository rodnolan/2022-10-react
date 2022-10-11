import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const MyList = ({listItems}) => {

    // console.log(listItems);
    return <ul>
        {
            listItems.map((item) => <li key={uuidv4()}>{item}</li> )
        }
    </ul>;
}




MyList.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired
}
