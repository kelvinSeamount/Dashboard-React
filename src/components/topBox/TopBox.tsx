import { topDealUsers } from "../../data.ts";
import "./topbox.scss";

type TopBoxProps = {
  id: number;
  username: string;
  email: string;
  img: string;
  amount: string;
};

const TopBox = ({ id }: TopBoxProps) => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={id}>
            <div className="user">
              <img src={user.img} alt="image-icons" />
              <div className="">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;