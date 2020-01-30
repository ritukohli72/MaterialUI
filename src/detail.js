import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
};
class Detail extends Component {
  constructor() {
    super();
    this.state = {
      record: null
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`https://mddev.mdcms.ch/mdrdemod/CLNTAPI31?id=${id}`)
      .then(res => res.json())
      .then(record => {
        this.setState({
          record
        });
      });
  }
  render() {
    var { record } = this.state;
    console.log(record);
    if (!record) {
      return <div>Loading the detail...</div>;
    }
    let dispArr = [];

    for (let x in record) dispArr.push({ label: x, value: record[x] });

    return (
      <Container>
        <div>
          <div>
            <ThemeProvider theme={theme}>
              <table>
                <tbody>
                  {dispArr.map(row => (
                    <tr>
                      <td> {row.label} </td>
                      <td>:</td> <td> {row.value} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ThemeProvider>
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
    );
  }
}

export default Detail;
