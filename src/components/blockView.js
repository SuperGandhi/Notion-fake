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
    
    return <div>
        <TextBlockView ref={ref} data={data}/>
    </div>;
}

