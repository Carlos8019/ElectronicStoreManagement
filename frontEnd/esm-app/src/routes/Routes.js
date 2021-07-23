import { React, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import AddClients from '../pages/AddClients';
import PrivateRoute from './PrivateRoute';
import UserContext from '../contexts/UserContext';

function Routes() {
    const {user} = useContext(UserContext);
    console.log("router",user);
    return (
            <BrowserRouter>
                {user ?
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/menu" component={Menu} />
                        <PrivateRoute exact path="/menu/addclient" component={AddClients} />
                        <Route path="*">
                            <h3>Pagina no encontrada</h3>
                        </Route>
                    </Switch>
                    :
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route>
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                }
            </BrowserRouter>
    );
}
export default Routes;