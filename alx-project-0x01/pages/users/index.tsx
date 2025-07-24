import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

type UsersPageProps = {
  posts: UserProps[];
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Users List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Users;
