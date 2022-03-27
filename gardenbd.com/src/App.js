
import './App.css';
import Store from './components/Store/Store';

function App() {
  return (
    <div className="App">
     <h1 style={{color:'greenyellow', fontSize:'40px'}}>GARDEN BD</h1>
     
      <Store></Store>

      <div> 
        <article>
          <h1>How React Works</h1>
          <p>React is a Javascript Library. 
            It works in declarative code . 
            React components are made with two main ingredients: State and Props . 
            By this, we can organize components in hierarchical structure that ensures a one-way data flow by props. In addition, child red can't update the data if the data need to be updated. Children received another props  from their parents a function to update it.
          </p>
        </article>
        <article>
          <h1>Props Vs State </h1>
          <p>
             Props are read-only.
              State changes can be asynchronous .
              Props can not be modified .
              State can be modified using this.setState 
              In Props data is passed from one components to another where in state data is passed within the component only.
         </p>
        </article>
      </div>


    </div>
  );
}

export default App;
