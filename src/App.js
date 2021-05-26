import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'
import ReactTable from "react-table";  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactPlayer url= 'https://www.youtube.com/watch?v=R2pIutTspQA'/>
        <img src="https://m.media-amazon.com/images/I/71+Q8W8ixtL._SS500_.jpg" className="App-logo" alt="logo" />
        <p>
          Welcome to MiCode, we are here to learn coding.
        </p>
        
        <table >
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
        
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=R2pIutTspQA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to code
        </a>
      </header>
    </div>
  );
}

export default App;
