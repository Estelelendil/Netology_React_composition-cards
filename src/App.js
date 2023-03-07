import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card title='keep calm' text='and drink wine' link='https://www.wildberries.ru/catalog/13052675/detail.aspx' >
        <image
          //  src="https://m.media-amazon.com/images/I/41-13-Uq4-L._AC_SY450_.jpg"
          class="card-img-top" alt="альтернативная картинка"></image>

      </Card>
      <Card title='keep calm' text='and drink wine' link='https://www.wildberries.ru/catalog/13052675/detail.aspx' >


      </Card>
    </div>
  );
}

export default App;
