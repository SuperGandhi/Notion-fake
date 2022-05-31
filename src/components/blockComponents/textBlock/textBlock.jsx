import Input from "../../input"

export default function TextBlock({item, onChange}) {

    function handleOnChange(e){
        onChange();
    }
    return <Input value={item.text} onChange={handleOnChange}></Input>
}