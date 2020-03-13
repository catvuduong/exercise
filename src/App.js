import React from 'react';

import './App.css';
// import BaiTap3 from './component/baitap3';
// import BaiTap4 from './component/baitap4';
// import BaiTapCar from './handling-event/baitap-car';
// import ListKeys from './list-keys/index';
// import ListMovies from './list-keys/list-movie';
import ExampleHandlingEvent from './handling-event/example-handling-event';
import Props from './props/index';
import LiftingStateUp from './lifting-state-up/index';
import LiftingStateUpCart from './lifting-state-up-cart/index';
import Home from './user-management/Home';
import HomeRedux from './user-management react-redux/Home';
import FormValidation from './form-validation/form-validation';


function App() {
  return (
    <div>
      {/* <BaiTap3 /> */}
      {/* <BaiTap4 /> */}
      {/* <BaiTapCar />
      <ListKeys />
      <ListMovies /> */}
      <ExampleHandlingEvent />
      <Props />
      <LiftingStateUp />
      <LiftingStateUpCart />
      <Home />
      <HomeRedux />
      <FormValidation />


    </div>
  );
};

export default App;
