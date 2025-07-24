import { UserProps } from "@/interfaces";

export default function UserCard({ user }: UserProps) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition-all bg-white max-w-md w-full mx-auto mb-6">
      <h2 className="text-xl font-bold text-blue-700">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-800 mt-1">{user.email}</p>
      <p className="text-sm text-gray-700 mt-1">
        📍 {user.address.city}, {user.address.street}, {user.address.suite}
      </p>
      <p className="text-sm text-gray-700 mt-1">📞 {user.phone}</p>
      <p className="text-sm text-gray-700 mt-1">🌐 {user.website}</p>
      <div className="mt-3">
        <h4 className="font-semibold text-gray-800">Company</h4>
        <p className="text-sm">{user.company.name}</p>
        <p className="text-xs italic text-gray-500">
          {user.company.catchPhrase}
        </p>
      </div>
    </div>
  );
}
