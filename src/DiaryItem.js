const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          作成者：{author} | 気分：{emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;