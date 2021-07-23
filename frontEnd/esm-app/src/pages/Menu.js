import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Login from'../pages/Login';
import {NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import Routes from '../routes/Routes';
import { Link } from '@material-ui/core';
import UserContext from '../contexts/UserContext';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function Menu() {
  const classes = useStyles();
  const {user,logout}=useContext(UserContext);
  console.log("menu",user);
  return (
    <div>
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem><NavLink to="/menu/addclient">Registro de Clientes</NavLink></MenuItem>
          <MenuItem>Registro de Productos</MenuItem>
          <MenuItem>Registro de Ventas</MenuItem>
          <MenuItem>Registro de Usuarios</MenuItem>
          <MenuItem>Registro de Asignaciones</MenuItem>
          <MenuItem>Agenda</MenuItem>
          <MenuItem ><NavLink onClick={logout} to="/" activeClassName="active" >Salir</NavLink></MenuItem>
        </MenuList>
      </Paper>
      <div>
      </div>
    </div>
    </div>
  );
}
