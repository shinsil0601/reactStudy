import { useState } from "react";


function Article(props) {
    return(
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}
function Head(props) {
    return(
        <header>
            {/* e => 이벤트실행 */}
            <h1><a href="/"onClick={(e)=>{
                // 페이지 리로드(바뀌지)를 하지 않게 하자
                e.preventDefault();
                
                // head 컴포넌트에 onChageMode를 실행한다. 뜻
                props.onChageMode();
            }}>{props.title}</a></h1>
        </header>
    );
}
function Nav(props) {
    console.log(props);
    const arr =[];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        arr.push(
        <li key={t.id}>{t.id}
        <a id={t.id} href={"/read/"+t.id} onClick={(e)=>{
            e.preventDefault();
            //배열을 넣어준다.
            props.onChageMode(e.target.id);
        }}>{t.title}</a>
        </li>);
    }
    return(
        <nav>
            <ol>
                {arr}
            </ol>
        </nav>
    );
}
function Create(props) {
    return <article>
        <h2>Create</h2>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            props.onCreate(title,body);
        }}>
            <p><input type="text" name="title" placeholder="title"/></p>
            <p><textarea name="body" placeholder="body"/></p>
            <p><input type="submit" value="Create"/></p>
        </form>
    </article>
}

export default function Main02() {
    const top = [
        {id:1, title:"HTML", body:"Hypertext Markup Language"},
        {id:2, title:"CSS", body:"Cascading Style Sheet"},
        {id:3, title:"JS", body:"JavaScript"}
    ];
    
    // 초기값 지정
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    let content = null; 

    if(mode === 'WELCOME'){
        content = <Article title="Welcome" body="Hello, WEB" />;
    }else if (mode === 'READ') {
        let title, body = null;
        for (let i = 0; i < top.length; i++) {
            // id를 조작하기 위해서 useState를 사용하자
            if (top[i].id === Number(id)) {
                title = top[i].title;
                body = top[i].body;
            }
        }
        content = <Article title={title} body={body} />;
    }else if(mode === 'CREATE'){
        content = <Create onCreate ={(_title, _body)=>{
            const newTop = {id:nextId, title:_title, body:_body};
            // ...top => top 배열을 복사해서 newTops를 만든다
            const newTops = [...top]
            // newTops에 파라미터로 넘어온 값을 배열로 만든 newTop 추가
            newTops.push(newTop);
            setMode('READ');
            setId(nextId);
            setNextId(nextId+1);
        }} />
    }

    return(
        <div>
            {/* 컴포넌트, props */}
            <Head title="WEB" onChageMode={()=> {
              // alert("Head");
              setMode("WELCOME");
            }}/>
            <Nav topics={top} onChageMode={(id)=>{
               // alert(id);
               setMode("READ");
                setId(id);
            }}/>
            {/* <Article title="Welcome" body="Hello, WEB" /> */}
            {content}
            <p>
            <a href="/create" onClick={(e)=>{
                 e.preventDefault();
                 setMode('CREATE');
            }}>Create</a>
            </p>
        </div>
    );
}