import { React, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import AddClients from '../pages/AddClients';
import UserContext from '../contexts/UserContext';
import BlankPage from '../pages/BlankPage';
import { ClientProvider } from '../contexts/ClientContext';
import AddServices from '../pages/AddServices';
import { ServiceProvider } from '../contexts/ServicesContext';
import { NotificationContainer } from 'react-notifications';
import { MethodsProvider } from '../contexts/MethodsContext';
import { ProductsProvider } from '../contexts/ProductsContext';
import AddProduct from '../pages/AddProduct';
function Routes() {
    const { user } = useContext(UserContext);
    console.log("router", user);
    return (
        <MethodsProvider>
            <BrowserRouter>
                <NotificationContainer />
                {user ? <Menu /> : <h1></h1>}
                {user ?
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/blank" component={BlankPage} />
                        <Route exact path="/addclient">
                            <ClientProvider>
                                <AddClients />
                            </ClientProvider>
                        </Route>
                        <Route exact path="/addservice">
                            <ServiceProvider>
                                <AddServices />
                            </ServiceProvider>
                        </Route>
                        <Route exact path="/addproduct">
                            <ProductsProvider>
                                <AddProduct />
                            </ProductsProvider>
                        </Route>
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
        </MethodsProvider>
    );
}
export default Routes;
