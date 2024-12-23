//ui
import { RouteProvider } from './config/routeConfig';
//styles
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <RouteProvider />
    </div>
  );
}

export default App;
