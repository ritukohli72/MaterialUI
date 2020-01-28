import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

function createData(arr) {
  let name=arr[0];
  let projectName=arr[1];
  return { name, projectName };
}


function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Project' },
  { id: 'projectName', numeric: false, disablePadding: true, label: 'Description' },
];

 const rows1={"projects": [
  {
  "proj": "AFDEMO"
  ,
  "desc": "Demo project for AF"
  }
  ,
  {
  "proj": "AGAFFER"
  ,
  "desc": "The gaffer project."
  }
  ,
  {
  "proj": "ALICE 1"
  ,
  "desc": "Alice 1"
  }
  ,
  {
  "proj": "ARENPROJECT"
  ,
  "desc": "Testprojekt"
  }
  ,
  {
  "proj": "ASDF"
  ,
  "desc": "fasdf"
  }
  ,
  {
  "proj": "AUTOPROJ"
  ,
  "desc": "MDUPDPROJ Project"
  }
  ,
  {
  "proj": "BELLA 1"
  ,
  "desc": "Bella 1"
  }
  ,
  {
  "proj": "CATI 1"
  ,
  "desc": "Cat 1"
  }
  ,
  {
  "proj": "CR2018-A"
  ,
  "desc": "CR2018-A"
  }
  ,
  {
  "proj": "CR2018-ADD1"
  ,
  "desc": "CR2018-Add1"
  }
  ,
  {
  "proj": "CR2018-AD1"
  ,
  "desc": "CR2018-Ad1"
  }
  ,
  {
  "proj": "CR2019-ADD1"
  ,
  "desc": "CR2019-Add1"
  }
  ,
  {
  "proj": "CR2019-ADD2"
  ,
  "desc": "CR2019-Add2"
  }
  ,
  {
  "proj": "DANIELA 2"
  ,
  "desc": "Daniela 2"
  }
  ,
  {
  "proj": "DEMOCH"
  ,
  "desc": "DEMOCH"
  }
  ,
  {
  "proj": "DEMOIS01"
  ,
  "desc": "Demo 01 in Israel"
  }
  ,
  {
  "proj": "DEMOPRO"
  ,
  "desc": "Demo Prosystem"
  }
  ,
  {
  "proj": "DEMOSAF"
  ,
  "desc": "Demo project BrandSafway"
  }
  ,
  {
  "proj": "DEMOSM"
  ,
  "desc": "Building API's and Consumers"
  }
  ,
  {
  "proj": "DEMOUK1"
  ,
  "desc": "demo of mdcms"
  }
  ,
  {
  "proj": "DEMO03"
  ,
  "desc": "Demo project number three"
  }
  ,
  {
  "proj": "DEMO03RT4"
  ,
  "desc": "Demo project number 3.test 4"
  }
  ,
  {
  "proj": "DEMO033"
  ,
  "desc": "Demo project 03"
  }
  ,
  {
  "proj": "DEMO04"
  ,
  "desc": "test end-to-end"
  }
  ,
  {
  "proj": "DEMO044"
  ,
  "desc": "Demo project 44"
  }
  ,
  {
  "proj": "DEMO0801"
  ,
  "desc": "Demo Project"
  }
  ,
  {
  "proj": "DEMO123"
  ,
  "desc": "demo 123 of dev flow"
  }
  ,
  {
  "proj": "DEMO13RT"
  ,
  "desc": "Demo project number 13 with rich text"
  }
  ,
  {
  "proj": "DEMO180116"
  ,
  "desc": "demo of mdcms"
  }
  ,
  {
  "proj": "DFTP1"
  ,
  "desc": "project 1 with a default value"
  }
  ,
  {
  "proj": "DFTP2"
  ,
  "desc": "project 2 with a default value"
  }
  ,
  {
  "proj": "DOROTHÉ 1"
  ,
  "desc": "Titel 1"
  }
  ,
  {
  "proj": "EVER001"
  ,
  "desc": "everence item 1"
  }
  ,
  {
  "proj": "EVER002"
  ,
  "desc": "everence item 2"
  }
  ,
  {
  "proj": "EVI"
  ,
  "desc": "Eva"
  }
  ,
  {
  "proj": "FRANZI 2"
  ,
  "desc": "Franziska"
  }
  ,
  {
  "proj": "FRANZI 3"
  ,
  "desc": "Franziska 3"
  }
  ,
  {
  "proj": "FROMCMD"
  ,
  "desc": "Project opened from Command"
  }
  ,
  {
  "proj": "GLEN"
  ,
  "desc": "Glen Demo"
  }
  ,
  {
  "proj": "GRAF01"
  ,
  "desc": "Extend abbreviation field in Partner file"
  }
  ,
  {
  "proj": "GUGUS"
  ,
  "desc": "Gugus Project"
  }
  ,
  {
  "proj": "HATCO1"
  ,
  "desc": "Project 1 for Hatco"
  }
  ,
  {
  "proj": "JD"
  ,
  "desc": "JIRADEMO"
  }
  ,
  {
  "proj": "JENKINS"
  ,
  "desc": "JENKINS INTEGRATION TESTING"
  }
  ,
  {
  "proj": "JI"
  ,
  "desc": "Jira Interface"
  }
  ,
  {
  "proj": "KUCK 1"
  ,
  "desc": "Kuck 1"
  }
  ,
  {
  "proj": "LEGACY"
  ,
  "desc": "Legacy migration"
  }
  ,
  {
  "proj": "LIMP1"
  ,
  "desc": "Limit Project 1"
  }
  ,
  {
  "proj": "LOGO"
  ,
  "desc": "sadf"
  }
  ,
  {
  "proj": "MDP1"
  ,
  "desc": "MD project 1"
  }
  ,
  {
  "proj": "MDP2"
  ,
  "desc": "MD project 2"
  }
  ,
  {
  "proj": "MDP3"
  ,
  "desc": "MD project 2"
  }
  ,
  {
  "proj": "MDP4"
  ,
  "desc": "MD project 2"
  }
  ,
  {
  "proj": "MDP5"
  ,
  "desc": "MD project 5"
  }
  ,
  {
  "proj": "MDP6"
  ,
  "desc": "project 5"
  }
  ,
  {
  "proj": "MULTIASSIGN"
  ,
  "desc": "Mulit RFP assign"
  }
  ,
  {
  "proj": "NAPPY"
  ,
  "desc": ""
  }
  ,
  {
  "proj": "NFDFTWOTASK"
  ,
  "desc": "new from defaults without tasks"
  }
  ,
  {
  "proj": "NOTASKS"
  ,
  "desc": "a project not allowing tasks and requiring involvement"
  }
  ,
  {
  "proj": "NP33"
  ,
  "desc": "New Project 33"
  }
  ,
  {
  "proj": "OT1"
  ,
  "desc": "internal project tasks 1"
  }
  ,
  {
  "proj": "PHP"
  ,
  "desc": "PHP Enhancements and Corrections"
  }
  ,
  {
  "proj": "PRETEST1"
  ,
  "desc": "Pre-test settings"
  }
  ,
  {
  "proj": "PRETEST2"
  ,
  "desc": "pretest workflow"
  }
  ,
  {
  "proj": "REN 22"
  ,
  "desc": "Rene 22"
  }
  ,
  {
  "proj": "RENÉ TEST 1"
  ,
  "desc": "René Testproject 1"
  }
  ,
  {
  "proj": "RENÉ TEST 2"
  ,
  "desc": "René Testproject 2"
  }
  ,
  {
  "proj": "RENÉ TEST 24"
  ,
  "desc": "René Testproject 2"
  }
  ,
  {
  "proj": "RENCUST1"
  ,
  "desc": "Rene custom field test 1"
  }
  ,
  {
  "proj": "RENTEST1"
  ,
  "desc": "Test for custom user"
  }
  ,
  {
  "proj": "RESTPROJ3"
  ,
  "desc": "Project created via REST API"
  }
  ,
  {
  "proj": "SAMDEMO"
  ,
  "desc": "Samworth Demo"
  }
  ,
  {
  "proj": "SUPERSMART"
  ,
  "desc": "Smart Project for Ren ö"
  }
  ,
  {
  "proj": "SVCNOW"
  ,
  "desc": "ServiceNow Incidents"
  }
  ,
  {
  "proj": "TEST"
  ,
  "desc": "test 2"
  }
  ,
  {
  "proj": "TEST BLANK"
  ,
  "desc": "Blank in name project"
  }
  ,
  {
  "proj": "TESTPROJ"
  ,
  "desc": "Test Project"
  }
  ,
  {
  "proj": "TESTSTS"
  ,
  "desc": "Test Status handling"
  }
  ,
  {
  "proj": "TP2"
  ,
  "desc": "test project 2"
  }
  ,
  {
  "proj": "URLTEST"
  ,
  "desc": "urltest"
  }
  ,
  {
  "proj": "VIENNA"
  ,
  "desc": "Demo for my Austrian friends"
  }
  ,
  {
  "proj": "V8"
  ,
  "desc": "tests for version 8"
  }
  ,
  {
  "proj": "Z-CUSTOM-TST"
  ,
  "desc": "Custom Test for custom fields"
  }
  ,
  {
  "proj": "ZANDER 1"
  ,
  "desc": "Zanderprojekt"
  }
  ,
  {
  "proj": "ZÜRI"
  ,
  "desc": "Züri läuft"
  }
  ]}
   

 const rows=createData1(rows1) ;
 console.log('HERE ARE THE ROWS',rows);

function createData1(rows1)
{
  let rows=Object.values(rows1)[0];
  let data=[]
  rows.map(row=>{
    let ObjArr=Object.values(row);
    data.push(createData(ObjArr));
  });
  
  return(data);
}

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('projectName');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.projectName}</TableCell>
                      {/* <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell> */}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
