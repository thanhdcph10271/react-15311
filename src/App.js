import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Albums from './component/Albums';
import Footer from './component/Footer';
import Hello from './component/Hello';
import Product from './component/Product';
function App() {
  const students=[
    {id:'PH12547',name:"Phạm Đức Việt Anh"},
    {id:'PH11565',name:"Phạm Thế Anh"},
    {id:'PH12174',name:"Trần Thế Cường"}
  ]
  return (
    <div className="App">
      {/* {students.map(({id,name},index)=>{
        return <p>Xin chào <Hello ten={name} />  </p>
      })} */}
      <Product/>
    </div>
    
  );
  
}

export default App;
