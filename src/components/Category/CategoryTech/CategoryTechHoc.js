import {getTech} from './queries' ;
import {graphql} from "@apollo/client/react/hoc";
import {compose} from "redux";


export default compose(graphql(getTech));