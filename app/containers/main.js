import { connect } from 'react-redux';
import { Main }    from '../components/main';

const MainContainer = connect(
    (state) => {
        return {message: state.message};
    }
)(Main);

export default MainContainer;
