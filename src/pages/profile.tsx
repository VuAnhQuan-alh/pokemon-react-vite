import { usePeopleContext } from "../hooks-game/usePeople";

const Profile = () => {
  const people = usePeopleContext();
  console.log({ ...people });

  return <div>profile page</div>;
};

export default Profile;
