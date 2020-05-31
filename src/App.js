import React from 'react';
import './App.css';
// import BasicsOfReact from './Components/BasicsOfReact';
// import Counter from './Components/Counter/Counter';
// import PropsStateDestructing from './Components/PropsStateDestructing';
// import FunctionalComponentEvent from './Components/EventHandling/FunctionalComponentEvent';
// import ClassComponentEvent from './Components/EventHandling/ClassComponentEvent';
// import EventBind from './Components/EventHandling/EventBind';
// import ListRendering from './Components/ListRendering';
// import PersonListing from './Components/PersonListing/PersonListing';
// import FilterComponent from './FilterComponent';
// import GeneratorFunction from './ES6/GeneratorFunction';
// import ClosureComponent from './ES6/ClosureComponent';
// import SpreadOperator from './ES6/SpreadOperator';

// import SearchComponent from './SearchComponent';
import HttpRequestComponent from './HTTP/HttpRequestComponent';

function App() {
  return (    
     <div className="App">
      Data Fetching
      <HttpRequestComponent/>
      {/* <SearchComponent/> */}

      {/* <ClosureComponent/>
      <SpreadOperator/>
      <GeneratorFunction/>
       <FilterComponent/>

       <div>----------------BasicsOfReact----------------</div><br/>
        <BasicsOfReact/>
        <div>----------------Counter----------------</div><br/>
        <Counter></Counter>
        <div>----------------PropsStateDestructing----------------</div><br/>
        <PropsStateDestructing username="Rohit" password="pawar"/>
        <div>----------------FunctionalComponentEvent----------------</div><br/>
        <FunctionalComponentEvent/>
        <div>----------------ClassComponentEvent----------------</div><br/>
        <ClassComponentEvent/>
        <div>----------------EventBind----------------</div><br/>
        <EventBind/>
        <div>----------------ListRendering----------------</div><br/>
        <ListRendering/>
        <div>----------------PersonListing----------------</div><br/>
        <PersonListing/> */}
     </div>
  )
}

export default App;
