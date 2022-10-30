import React,{ Component,lazy, Suspense} from 'react';
//import myComp from './components/myComp';
//import MyComp from './components/myComp';
const Mycomp=lazy(()=>import('./lazyloading'))
class App extends Component{
  render(){
return(
<Suspense fallback={<div>loading....</div>}>
 <div className="App">
<header className="App-header">
<Mycomp></Mycomp>
 </header>
 </div>
 </Suspense>
 )
}
}

export default App;


// import StudentDetails from './student-components/StudentDetails';

// function App() {
//   return (
//     <div className="App">
//      < StudentDetails />
//     </div>
//   );
// }

// export default App;
