import { forwardRef } from "react"
import TextBlock from "./textBlock"


function TextBlockView({data, onChange}, ref){
    function handleOnChange(item,e){
        onChange({type: 'text', id:item.id, text:e.target.value, completed: item.completed})
    }
    return data.map((item) => <TextBlock key={item.id} item={item} onChange={handleOnChange}/>);
}

export default forwardRef(TextBlockView);