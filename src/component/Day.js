import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import Word from "./Word";


export default function Day() {
    // url에 포함된 day값을 가져오기 위해서 useParams() 
    // useParams()는 라우터에서 제공 

    const day = useParams().day;
    console.log("day : " + day);

    // filter는 해석 그대로 걸러주는 역할을 하는 함수입니다.
    // 주로 특정 조건을 만족하는 새로운 배열을 필요로 할 때 사용하는 편입니다.
    // SQL로 치면 where절에서 하는 행위를 하는 함수입니다.

    // 문자를 숫자로 바꿔주는 것 : Number
    const wordList = dummy.words.filter(k => (k.day === Number(day)));
    return(
            <>
            <h2>Day{Day}</h2>
                <table>
                    <tbody>
                        {/* map은 배열의 요소를 한나씩 추출 처리할 때 사용,
                            k는 배열에서 꺼내진 하나의 요소를 의미한다. */}
                        {wordList.map(k =>(
                            // 컴포넌트에 속성을 부여하는것
                            <Word word={k} key={k.id}/>
                        ))}
                    </tbody>
                </table>
            </>
        );
}