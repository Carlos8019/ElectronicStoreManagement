import {React} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from'../pages/Login';
import Menu from'../pages/Menu';
function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/menu" component={Menu} />
            <Route path="*">
                <h3>Pagina no encontrada</h3>
            </Route>
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;