import logo from './logo.svg';
import './App.css';
import { Entry } from './Pages/EntryPage/Entry';
import { DefaultLayout } from './Layouts/DefaultLayout';
import { Dashboard } from './Pages/Dashboard/Dashboard.page';
import { AddTicket } from './Pages/New-Ticket/AddTicket.comp';
function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Dashboard/>
        <AddTicket></AddTicket>
        
      </DefaultLayout>
    </div>
  );
}

export default App;
