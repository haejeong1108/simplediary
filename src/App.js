import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "へジョン",
    content: "日記内容",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "友達",
    content: "日記内容２",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "ジジ",
    content: "ニャーニャー",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
