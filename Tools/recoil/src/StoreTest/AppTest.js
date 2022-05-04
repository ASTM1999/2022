import './App.css';
import { atom, useRecoilState, useRecoilValue, selector, useResetRecoilState} from "recoil"; //

//Atom define fontsize
const fontSizeState = atom({
    kye: 'fontSizeState',
    default: 14,
})



function Apptest() {
    function FontButton(){
        const [fontSize, setFontSize] =useRecoilState(fontSizeState);
        return (
            <button onclick = {() => setFontSize((size) => size + 1)} style = {{fontSize}}>
                Click to Enlarge
            </button>
        );
    }
    function Test(){
        const [fontSize, setFontSize] = useRecoilState(fontSizeState);
        return <p style={{fontSize}}>This text will increase in size too.</p>
    }

    
}
export default Apptest;