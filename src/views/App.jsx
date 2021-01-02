import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { CourseProvider } from "../components/CourseContext";
import NavBar from "../components/NavBar";

// Routes
import AdvancedCourses from "./AdvancedCourses";
import BasicCourses from "./BasicCourses";
import Overview from "./Overview";

function App() {
  return (
    <div className="App">
      <CourseProvider>
        <NavBar />

        <main className="main">
          <Switch>
            <Route path="/leistungskurse" component={AdvancedCourses} />
            <Route path="/grundkurse" component={BasicCourses} />
            <Route path="/ueberblick" component={Overview} />

            <Route exact path="/*">
              <Redirect to="/leistungskurse" />
            </Route>
          </Switch>
        </main>

        <footer className="footer">*Verpflichtend</footer>
      </CourseProvider>
    </div>
  );
}

export default App;
