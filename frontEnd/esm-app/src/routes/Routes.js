import {React} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Login} from'../pages/Login';
import {Menu} from'../pages/Menu';
import {AddClients} from'../pages/AddClients';
function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login" component={<Login />} />
            <Route path="/menu" component={<Menu />}/>
            <Route path="/addClients" component={<AddClients  />}/>
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;