import { useState } from "react";

// 속성을 받아준다 (props)
// props : object 이다
export default function Hello(props) {
    // props는 강제로 변경할 수 없다.
    // props.age = 150;
    console.log("props : ", props);
    const [name, setName] = useState('hong');

    // useState를 이용해서 변경값을 사용
    const [age, setAge] = useState(props.age);

    const msg = props.age > 19 ? "성년" : "미성년";

    function changeName() {
        const newName = name === 'hong' ? 'kim' : 'hong';
        setName(newName);
        setAge(age + 5);
    }
    return(
        <div>
            <h1>{name} ({age}) : {msg}</h1>
            <button onClick={changeName}>changeName</button>
        </div>
    )
}

