// 기본 양식
// export default function Main01() {
//     return(
//     );
// }
import Day from "./Day";
import DayList from "./DayList";
import Header from "./Header";

export default function Main01() {
    return(
        <div>
            <Header />
            <DayList />
            <Day />
        </div>
    );
}