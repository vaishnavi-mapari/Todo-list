import React from 'react';
// import LudoBoard from './LudoBoard'
import TodoList from './component/TodoList';
import NavBar from './component/NavBar';
// import Footer from './component/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './component/Error'; // Fixed the import statement

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoList />} /> 
          <Route exact path="/Home" element={<TodoList />} /> 
          {/* <Route exact path="/Todolists" element={<TodoList />} />    */}
          <Route path="*" element={<Error />} />    
        </Routes>
      </Router>
      <div className='container'>
        {/* <LudoBoard/> */}
        {/* <TodoList/> */}
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default App;
