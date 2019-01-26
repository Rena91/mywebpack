import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

// // import async.js
// import( './async.js' ).then( ( data ) => {
//   console.log( data );
// } )
import loadable from 'react-loadable'
// contact route component
const LoadingComponent = () => <h3>please wait...</h3>

const ContactComponentPromise = () => {
    return import('./contact.component');
}
const AsyncContactComponent = loadable( {
    loader: ContactComponentPromise,
    loading: LoadingComponent
} );

const AboutComponentPromise = () => {
    return import('./about.component');
}
const AsyncAboutComponent = loadable( {
    loader: AboutComponentPromise,
    loading: LoadingComponent
} );

const HomeComponentPromise = () => {
    return import('./home.component');
}
const AsyncHomeComponent = loadable( {
    loader: HomeComponentPromise,
    loading: LoadingComponent
} );

// home route component


// about route component


// contact route component

// create sample App component
class App extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <div className="menu">
                        <Link exact to="/" activeClassName="active">Home</Link>
                        <Link to="/about" activeClassName="active">About</Link>
                        <Link to="/contact" activeClassName="active">Contact</Link>
                    </div>
                    
                    <Switch>
                        <Route exact path="/" component={ AsyncHomeComponent } />
                        <Route path="/about" component={ AsyncAboutComponent } />
                        <Route path="/contact" component={ AsyncContactComponent } />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App