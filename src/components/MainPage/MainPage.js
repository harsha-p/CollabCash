import React, { Component } from 'react';
import Header from '../Header/Header';
import LeftComponent from './LeftComponent';
import MiddleComponent from './MiddleComponent';
import RightComponent from './RightComponent';
// import GroupsList from '../Groups/GroupsList';

class MainPage extends Component {
   render() {
      return (
         <>
            <Header />
            <div className="container main-box">
               <div className="row">
                  <div className="col">
                     <LeftComponent />
                     {/* <GroupsList />  */}
                  </div>
                  <div className="col-lg-7 col-sm-12">
                     <MiddleComponent />
                  </div>
                  <div className="col">
                     <RightComponent />
                  </div>
                  
               </div>
            </div>
         </>
      );
   }
}

export default MainPage;