import user1 from "../assets/images/user-1.jpg";
const People = () => {
  return (
    <div>
      <div className="card w-96 glass">
        <figure className="w-56 flex item-center">
          <img src={user1} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
