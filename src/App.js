import Profile from "./components/Profile/Profile";
import user from "./db/user.json";

import StatisticsList from "./components/Statistics/StatisticsList";
import statisticalData from "./db/statistical-data.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./db/friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./db/transactions.json";

export default function App() {
  const { name, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
