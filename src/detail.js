import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import Container from "@material-ui/core/Container";

import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize:"200px"
  },
});
class Detail extends Component {
  constructor() {
    super();
    this.state = {
      record: null
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    if (this.props.location.record)
    {
    let record=this.props.location.record;
    this.setState({
        record
      });
    } else
    {
    fetch(`https://mddev.mdcms.ch/mdrdemod/CLNTAPI31?id=${id}`)
      .then(res => res.json())
      .then(record => {
        this.setState({
          record
        });
      });
    }
  }
  render() {
    var { record } = this.state;
    console.log('this.props.record',this.props.records);
    console.log(record);
    if (!record) {
      return <div>Loading the detail...</div>;
    }
    let dispArr = [];

    for (let x in record) dispArr.push({ label: x, value: record[x] });

    return (
      <ThemeProvider theme={theme}>
  <CssBaseline />
      <Container>
        <div>
          <div>
            <TableContainer>
              <Table>
                <TableBody>
                  {dispArr.map(row => (
                    <TableRow>
                      <TableCell> {row.label} </TableCell>
                      <TableCell>:</TableCell> <TableCell> {row.value} </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div style={{ marginLeft: "80px", marginTop: "50px" }}>
            <Link to="/">
              <Button variant="contained">
                <HomeIcon color="primary" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      </ThemeProvider>
    );
  }
}

export default Detail;
