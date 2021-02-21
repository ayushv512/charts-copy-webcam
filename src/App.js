import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import LandingPage from './pages/landing/landing.page';

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER
};

function App() {
  return (
    <div className="App">
       <Provider template={AlertTemplate} {...options}>
          <LandingPage />
       </Provider>
    </div>
  );
}

export default App;
