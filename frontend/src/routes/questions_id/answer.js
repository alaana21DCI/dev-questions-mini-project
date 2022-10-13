import Card from "../../UI/Card";
const Answer = (props) => {
  const answer = props.answer;
  return (
    <Card key={answer._id} className="answer_item">
      <div className="annotation">
        <div className="avatar">
          {answer.user.profileImage && (
            <a href="/account">
              <img
                className="profileImage"
                src={answer.user.profileImage}
                alt="profileImage"
              />
            </a>
          )}
          <h5>{answer.user.name}</h5>
        </div>
      </div>
      <div className="description">
        <p> {answer.description}</p>
      </div>
    </Card>
  );
};

export default Answer;
