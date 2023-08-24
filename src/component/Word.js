import { useState } from "react";

// 객체로 넘어오기 때문에 props의 사용되는 이름 그대로 사용
export default function Word({word}) {
    // 보였다가 안보였다가 하기 위해서
    // useState 도 사용 해야함
    // inShow 상태값을 만들어주고, props 로 word를 받아와
    // inShow가 true 일때만 보이게 하자
    
    //초기값은 안보이게 설정
    const[isShow, setIsShow] = useState(false);
    function toggleShow() {
        setIsShow( ! isShow)
    }
    return(
        <tr >
            <td><input type="checkbox" /></td>
            <td>{word.eng}</td>
            {/* 둘다 true 일때 보인다. (자바스크립트에서 0은 false, 1 이상은 true) */}
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow} style={{marginRight:"20px"}}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button style={{color:"red"}}>삭제</button>
            </td>
        </tr>
    );
}