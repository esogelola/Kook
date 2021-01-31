import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Search from "@material-ui/icons/Search";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { CalendarToday } from "@material-ui/icons";
import { useHistory, useRouteMatch } from "react-router-dom";

export const MainListItem = () => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div>
      <ListItem button onClick={() => history.push(`/app/cookbooks`)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Cookbooks" />
      </ListItem>
      <ListItem button onClick={() => history.push(`/app/search`)}>
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItem>
      <ListItem button onClick={() => history.push(`/app/meals`)}>
        <ListItemIcon>
          <CalendarToday />
        </ListItemIcon>
        <ListItemText primary="Meal Planner" />
      </ListItem>
      <ListItem button onClick={() => history.push(`/app/grocery-list`)}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Grocery List" />
      </ListItem>
    </div>
  );
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Recent Activity</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
