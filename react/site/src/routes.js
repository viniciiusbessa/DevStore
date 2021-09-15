import {BrowserRouter, Switch, Route} from 'react-router-dom';

import IndexPrincipal from '../src/pages/index';
export default function Routes(){
    return ( 
        <BrowserRouter>
         <Switch>
           <Route path="/" exact={true} component={IndexPrincipal}/>
         </Switch> 
        </BrowserRouter>
    )
}
