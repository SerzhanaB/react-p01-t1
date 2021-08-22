import logo from './logo.svg';
import './App.css';
import { Card } from 'antd';
const a=0;
const b=1;
function App() {
  return (
    <div className="App">
    

      <Card title="Сумма двух элементов" style={{ width: 300 }}>
      {a}+{b}={a+b}
      
    </Card>
    </div>


  );
}

export default App;
