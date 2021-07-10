import {React} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from'../pages/Login';
import Menu from'../pages/Menu';
//import AddClients from'../pages/AddClients';
//            <Route path="/menu" component={<Menu />}/>
//<Route path="/addClients" component={<AddClients  />}/>-
function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/menu" component={Menu} />
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;