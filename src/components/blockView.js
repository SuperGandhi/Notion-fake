import { useRef, useState } from "react";
import TextBlockView from "./blockComponents/textBlock/textBlockView";

export default function BlockView(){
    const ref = useRef(null);
    // show to default component text 
    const [currentItem, setCurrentItem] = useState(null);
    const [type, setType] = useState('text');
    const [properties, setProperties] = useState(['id', 'text', 'completed']);
    const [data, setData] = useState([
        {
            id: crypto.randomUUID(),
            text: 'Hi everyone', 
            completed: false,
        }
    ]);

    function handleChange(item){
        const {type,text,id} = item;
        if(type === 'text'){
            const temp = [...data];
            const editItem = temp.find(i => i.id === id)
            if(editItem){
                editItem.text = text;
                setData(temp);
            }
        }
    }
    
    return <div>
        <TextBlockView ref={ref} data={data} onChange={handleChange}/>
    </div>;
}

