import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, diaryList, onRemove }) => {
  return (
    <div className="DiaryList">
      <h2>日記リスト</h2>
      <h4>日記の数:{diaryList.length}</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
