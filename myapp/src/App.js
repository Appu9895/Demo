import logo from './logo.svg';
import './App.css';
import { Entry } from './Pages/EntryPage/Entry';
import { DefaultLayout } from './Layouts/DefaultLayout';
import { Dashboard } from './Pages/Dashboard/Dashboard.page';
function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Dashboard/>
        
      </DefaultLayout>
    </div>
  );
}

export default App;
