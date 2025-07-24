import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

type UsersPageProps = {
  users: UserProps[];
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <Header />
      <main className="flex-grow py-10 px-4">
        <div className="text-center text-white mb-8 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">Users Directory</h1>
          <p className="mt-2 text-xl">Meet our amazing users below</p>
        </div>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Users;
