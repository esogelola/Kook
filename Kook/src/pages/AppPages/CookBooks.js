import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Backdrop, Button, Container, Grid, Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import CookbookCard from "../../components/CookbookCard";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: theme.spacing(2),
  },
}));

const data = [
  {
    img: "https://via.placeholder.com/150",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Image",
    author: "author",
    cols: 2,
  },
];
export default function CookBooks() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}></Container>
        <Fab
          color="primary"
          className={classes.fab}
          aria-label="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth="md"
          maxWidth="lg"
        >
          <DialogTitle id="form-dialog-title">Add a Recipe</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter Recipe URL below.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="url"
              label="https://example.com"
              type="url"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </React.Fragment>
  );
}
