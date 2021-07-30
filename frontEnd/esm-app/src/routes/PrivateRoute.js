import React from 'react'
import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
const user = {id:1,user:'hola'};
export default function PrivateRoute({ component: Component, rest }) {
    return (
        <Route exact {...rest}>{user ? <Component />: <Redirect to="/" />}</Route>
    )
}
