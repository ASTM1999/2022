import './App.css'
import { atom, useRecoilState, useRecoilValue, selector, useResetRecoilState} from "recoil"; //
// atom คล้าย state 
// useRecoilState มาแทน useState 


// creat atom
const countAtom = atom({
  key: 'count-atom',  // unique ID   
  default: 5,         // ค่ากำหนดเริ่มต้น
})

const fontSizeSelector = selector({
  key: 'font-size-selector',
  get: ({ get }) => {
    const count = get(countAtom)
    const fontSize = count * 4
    return fontSize
  }
})

function App() {
  const [count, setCount] = useRecoilState(countAtom)
  const resetcount = useResetRecoilState(countAtom)
  const fontSize = useRecoilValue(fontSizeSelector)
  const countValue = useRecoilValue(countAtom)

  
  return (
    <div className="App">
      <h1>Hello React Recoil</h1>
      <h2>The count Value is : {count}</h2>
      <h3>The font size of potty is : {fontSize} px</h3>
      <button onClick={()=> setCount(count+1)}>Increase count</button>
      <button onClick={resetcount}>Reset count</button>
      <p style={{ fontSize: fontSize }}> ✨✨✨✨ </p>
      <h1>This is only count Value: {countValue}</h1>
    </div>
  );
}

export default App;
