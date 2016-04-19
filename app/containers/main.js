import { connect } from 'react-redux';
import { Main }    from '../components/main';

const MainContainer = connect(
    (state) => {
        return state;
    }
)(Main);

export default MainContainer;
