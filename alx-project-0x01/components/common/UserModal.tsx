import { UserModalProps } from "@/interfaces";

export default function UserModal({ user, onClose }: UserModalProps) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">{user.name}</h2>
          <p className="text-gray-700 mb-1">@{user.username}</p>
          <p className="text-gray-800 mb-2">{user.email}</p>
          <p className="mb-1">
            📍 {user.address.city}, {user.address.street}, {user.address.suite}
          </p>
          <p className="mb-1">📞 {user.phone}</p>
          <p className="mb-1">🌐 {user.website}</p>
          <div className="mt-4 border-t pt-3">
            <h3 className="font-semibold text-gray-800">Company</h3>
            <p>{user.company.name}</p>
            <p className="italic text-gray-500 text-sm">
              {user.company.catchPhrase}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
