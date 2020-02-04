import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/demo";
import Detail from "./components/detailWW";
import AppBar from "./components/appbar";
import SideBar from "./components/sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme();

theme.typography.h2 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recordsCustomers: [],

      recordsSchema: [],
      recordsProjects: []
    };
  }

  componentDidMount() {
    fetch("https://mddev.mdcms.ch/mdrdemod/CLNTAPI31")
      .then(res => res.json())
      .then(records => {
        this.setState({ recordsCustomers: records });
      });

    fetch(
      "https://mddev.mdcms.ch/mdrstt82/mdrfields?library=mdrdemod&file=custs"
    )
      .then(res => res.json())
      .then(records => {
        this.setState({ recordsSchema: records });
      });

    fetch("https://mddev.mdcms.ch/mdcmst82/open-projects")
      .then(res => res.json())
      .then(records => {
        console.log("PROPJECTS", records);
        this.setState({ recordsProjects: records });
      });
  }

  render() {
    let { recordsCustomers, recordsSchema, recordsProjects } = this.state;
    let headingCust = "Customers Data";
    let headingSchema = "Schema Data";
    let headingProjs = "Projects Data";
    return (
      recordsCustomers &&
      recordsSchema &&
      recordsProjects && (
        // <React.Fragment>
      
        <BrowserRouter>
          <div>

            <AppBar />
            <ThemeProvider theme={theme}>
            <Typography variant="h2">MidRange Dynamics data </Typography>
            {/* <SideBar /> */}
            <switch>
              <Route
                exact
                path="/customers"
                render={props => (
                  <Demo
                    {...props}
                    records={recordsCustomers}
                    heading={headingCust}
                    type="customers"
                  />
                )}
              />
              <Route
                exact
                path="/schema"
                render={props => (
                  <Demo
                    {...props}
                    records={recordsSchema}
                    heading={headingSchema}
                    type="schema"
                  />
                )}
              />
              <Route
                exact
                path="/projects"
                render={props => (
                  <Demo
                    {...props}
                    records={recordsProjects}
                    heading={headingProjs}
                    type="projects"
                  />
                )}
              />
              <Route
                path="/:type/:id"
                render={props => <Detail {...props} />}
              />

            
            </switch>
            </ThemeProvider>
          </div>
        </BrowserRouter>
        
        // </React.Fragment>
      )
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
