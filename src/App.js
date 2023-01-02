// import './App.css';

// function App() {
//   const fName = 'Akash';
//   const lName = 'Singh';
//   const num = 9;
//   return (
//     <div className="App">
//       <h1>{fName + ' ' + lName}'s Fav Food: </h1>
//       <ul>
//         <li>Rajma</li>
//         <li>Raita</li>
//         <li>Pav bhaji</li>
//       </ul>
//       <h3>
//         <i>Your lucky number is {num}</i>
//       </h3>
//     </div>
//   );
// }

// export default App;

import './App.css';

function App() {
  const fName = 'Akash';
  const lName = 'Singh';
  const num = new Date();
  return (
    <div className="App">
      <p>Created by {fName + ' ' + lName}</p>
      <p>
        <i>Copyright {num.getFullYear()}</i>
      </p>
    </div>
  );
}

export default App;
