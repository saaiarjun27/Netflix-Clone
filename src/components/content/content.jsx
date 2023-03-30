import './content.css'
import RowData from '../../constants/urls'
import Row from '../row/row'


export default function Content(){
    
    return <div className="contentWrapper">
        {RowData.map((el) => {
            return <Row title = {el.title} url = {el.url}/>
        })}
    </div>
}