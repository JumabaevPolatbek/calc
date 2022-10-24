import './App.css'
import Button from './Components/Button';
import WindowCalc from './Components/WindowCalc';
import { arrNumbers,arrSymbols } from './store/data';
import './App.css'
import ButtonAC from './Components/ButtonAC';

function App() {
  return (
    <div className='calc'>
      <div className='calc-window'>
        <WindowCalc />
      </div>
      <div className='calc-btns'>
        <div className='calc-numbers'>
          <div>
            {arrNumbers.map((num, index) => {
              if (index < 3) {
                return <Button item={num} key={index}/>
              }
            })}
          </div>
          <div>
            {arrNumbers.map((num, index) => {
              if (index>2 && index<6) {
                return <Button item={num} key={index}/>
              }
            })}
          </div>
          <div>
            {arrNumbers.map((num, index) => {
              if (index>5 && index<9) {
                return <Button item={num} key={index}/>
              }
            })}
          </div>
          <div>
            {arrNumbers.map((num, index) => {
              if (index>8 && index<12) {
                return <Button item={num} key={index}/>
              }
            })}
          </div>
        </div>
        <div className='calc-symbols'>
          {arrSymbols.map((symbol, index) => {
            return <Button item={symbol} key={index}/>
          })}
        </div>
      </div>
      <ButtonAC/>
    </div>
  )
}

export default App;
