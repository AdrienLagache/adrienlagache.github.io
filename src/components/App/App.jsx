import { useDispatch, useSelector } from 'react-redux';

import { changeInputText } from '../../services/actions/layoutActions';

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const inputText = useSelector((state) => state.layout.inputText);

  return (
    <div className="App">
    </div>
  );
}

export default App;
