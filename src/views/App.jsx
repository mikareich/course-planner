import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CourseProvider } from "../components/CourseContext";

// Routes
import AdvancedCourses from "./AdvancedCourses";
import BasicCourses from "./BasicCourses";
import Overview from "./Overview";

function App() {
  return (
    <div className="App">
      <CourseProvider>
        <header className="header" />

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

        <footer className="footer" />
      </CourseProvider>
    </div>
  );
}

export default App;
