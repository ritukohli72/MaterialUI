import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import Container from "@material-ui/core/Container";
import { useTheme } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';


import CssBaseline from "@material-ui/core/CssBaseline";
import { useAsync } from "react-async";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DetailsIcon from "@material-ui/icons/Details";
let rows = [];
let id;
const loadData = async () =>
  await fetch(`https://mddev.mdcms.ch/mdrdemod/CLNTAPI31?id=${id}`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

    
const useStyles = makeStyles(theme => ({
  root: {
    width: "70%",
    },
  paper: {
    width: "70%",
    marginBottom: theme.spacing(5)
  },
  table: {
    minWidth: 400,
    fontSize:"20px"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  
}));

export default function EnhancedTable(props) {
  
  
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [record,setRecord] = useState({})
  // const { data, error, isLoading } = useAsync({ promiseFn: loadData });
  const theme = useTheme(); 
  console.log('THEME',theme);
  let records = [];

  let rec=props.location.record;
  console.log('RECORD PARU',props)
 
   
  console.log('record',record)
  id = props.match.params.id;
  let heading=props.match.params.type+' '+'Info'
  useEffect(() => {

    if (!rec)
   fetch(`https://mddev.mdcms.ch/mdrdemod/CLNTAPI31?id=${id}`)
      .then(res => res.json())
      .then(row => {
        setRecord(row);
      });
      else
      setRecord(rec);
 
  });

  // if (isLoading) return "Loading..."
  // if (error) return `Something went wrong: ${error.message}`;

  // let record=data;if (record)
  if (record)
  {
  let rows=[];
  for (let x in record) rows.push({ label: x, value: record[x] });
  
    const handleChangeDense = event => {
      setDense(event.target.checked);
    };
     return(
   
        <Container style={{ marginTop: "100px" }}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  size={dense ? "small" : "medium"}
                  aria-label="enhanced table"
                >
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className={classes.title}
                          variant="h6"
                          id="tableTitle"
                          style={{ marginBottom: "10px", padding: "5px" }}
                        >
                          {heading}
                        </Typography>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                    {rows.map(row => (
                      <TableRow hover>
                        <TableCell style={{ fontWeight: 800 }}>
                          {" "}
                          {row.label}{" "}
                        </TableCell>
                        <TableCell align="left"> {row.value} </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
          <div style={{ marginLeft: "80px", marginTop: "50px" }}>
            <Link to="/">
              <Button variant="contained">Back</Button>
            </Link>
          </div>
        </Container>);
  }
  else
  return (<div>Loading</div>)     
      
  
  
}
