import "../../styles/globals.scss";
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }) => {

  // const [ scrollTop, scrollProps ] = useScrollTop();
  return <Component className="bg-black" {...pageProps} />;
};

export default App;
