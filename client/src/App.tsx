import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import IndexPage from 'pages/0/IndexPage';
import {menuValues} from 'data/menuData';

interface IPageValues {
  exact: boolean,
  link: string,
  component: Function,
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        {/* homepage */}
        <Route exact path="/" render={(props)=> <IndexPage {...props} />}/>
        {/* menuValues */}
        {menuValues.map((val: IPageValues) => (
          <Route
            exact={val.exact}
            path={val.link}
            key={val.link}
            render={(props) => 
              <val.component {...props}/>
            }
          />
        ))}
        {/* 404 */}
        <Route path="/:id" render={(props)=> <IndexPage {...props} />}/>
      </Switch>
    </div>
  );
}

export default App;
