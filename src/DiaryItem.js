import { useRef, useState } from "react";

const DiaryItem = ({
  onEdit,
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}番目の日記を削除しますか。`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handelEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}番目の日記を修正しますか。`)) {
      onEdit(id, localContent);
      toggleEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          作成者：{author} | 気分：{emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>取消</button>
          <button onClick={handelEdit}>登録</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>削除</button>
          <button onClick={toggleEdit}>編集</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
