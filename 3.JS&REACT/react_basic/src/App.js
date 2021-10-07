import './App.css';
import Counter from "./component/Counter";
import About from "./component/About";
import Home from "./component/Home";
import DisplayText from "./component/DisplayText";
import {useEffect, useRef, useState} from "react";

const data = [
    {
        id:1,
        text:"Hello World",
        color:"red",
        size:"50px",
        weight:"500"
    },
    {
        id:2,
        text:"I Love You",
        color:"blue",
        size:"40px",
        weight:"600"
    },
    {
        id:3,
        text:"I Like It",
        color:"green",
        size:"30px",
        weight:"700"
    },
    {
        id:4,
        text:"Test Text",
        color:"red",
        size:"20px",
        weight:"800"
    },
]

function App() {
    // const [check, setCheck] = useState(false);
    const [textData, setTextData] = useState([]);
    let idx = 5;
    const [info, setInfo] = useState({id:idx++, text:'', color:'', size:'', weight:''});
    // const inputText = useRef();

    useEffect(() => {
        setTextData(data);
    }, [])

    const handleRemoveTextData = (id) => {
        let items = [...textData]
        items.splice(items.findIndex(el => el.id === id), 1);
        setTextData(items);
    }

    const handleAddTextData = () => {
        setTextData([...textData, info]);
        setInfo({id:idx++, text:'', color:'', size:'', weight:''});
        // inputText.current.value = "";
    }

  return (
      <div>
        {/*<About />*/}
        {/*  <Home />*/}
        {/*  {*/}
        {/*      check ? <About/>:<Home/>*/}
        {/*  }*/}
        {/*  <button onClick={()=>{setCheck(!check)}}>Check</button>*/}
          {/*<DisplayText text="Hello world" color="red" size="50px" weight="800" />*/}
          {/*<DisplayText text="Hello world" color="blue" size="50px" weight="800" />*/}
          {/*<DisplayText text="Hello world" color="green" size="50px" weight="800" />*/}
          {
              textData.map((item, index) => (
                  <DisplayText id={item.id} text={item.text} color={item.color} size={item.size} weight={item.weight} handleRemoveTextData={handleRemoveTextData} />
              ))
          }
          <div style={{margin:"20px"}}>
            Text: <input type="text" value={info.text} onChange={(e)=>{setInfo({...info, text:e.currentTarget.value})}} /><br/>
              color: <input type="text" value={info.color} onChange={(e)=>{setInfo({...info, color:e.currentTarget.value})}} /><br/>
              size: <input type="text" value={info.size} onChange={(e)=>{setInfo({...info, size:e.currentTarget.value})}} /><br/>
              weight: <input type="text" value={info.weight} onChange={(e)=>{setInfo({...info, weight:e.currentTarget.value})}} /><br/>
              <input type="button" value="생성" onClick={handleAddTextData} />
          </div>
      </div>
  );
}

export default App;
