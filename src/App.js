
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NewApp from './NewApp';





function App(){

    return(
        <div>
        <Router>
            <Switch>
                <Route exact path="/" component = {<NewApp/>}/>
            </Switch>
        </Router>
    
        </div>
    )
}
export default App

