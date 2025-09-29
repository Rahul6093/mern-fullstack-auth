import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:4000/users");
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/users/${id}`);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setEditForm(user);
  };

  const handleSave = async () => {
    await axios.put(`http://localhost:4000/users/${editId}`, editForm);
    setEditId(null);
    fetchUsers();
  };

// bg-gradient-to-b from-purple-800 to-indigo-900

  return (
    <div className="min-h-screen min-w-screen bg-[url(./assets/bg.jpg)] bg-cover p-6">
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center" > 
      <div className="min-w-[55vw] max-w-[80vw] bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">Dashboard</h2>
        <table className="w-full table-auto border-collapse text-white">
          <thead>
            <tr className="bg-purple-700/70 text-white *:border *:border-white/30">
              <th className="p-3">First</th>
              <th className="p-3">Last</th>
              <th className="p-3">Username</th>
              <th className="p-3">Password</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u._id}
                className="border-b *:border *:border-white/20 hover:bg-purple-600/30 transition"
              >
                {editId === u._id ? (
                  <>
                    <td className="p-2">
                      <input
                        className="px-2 py-1 border rounded bg-white/20 text-white focus:ring-2 focus:ring-purple-400"
                        value={editForm.firstName}
                        onChange={(e) =>
                          setEditForm({ ...editForm, firstName: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        className="px-2 py-1 border rounded bg-white/20 text-white focus:ring-2 focus:ring-purple-400"
                        value={editForm.lastName}
                        onChange={(e) =>
                          setEditForm({ ...editForm, lastName: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        className="px-2 py-1 border rounded bg-white/20 text-white focus:ring-2 focus:ring-purple-400"
                        value={editForm.username}
                        onChange={(e) =>
                          setEditForm({ ...editForm, username: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        className="px-2 py-1 border rounded bg-white/20 text-white focus:ring-2 focus:ring-purple-400"
                        value={editForm.password}
                        onChange={(e) =>
                          setEditForm({ ...editForm, password: e.target.value })
                        }
                      />
                    </td>
                   <td className="p-2 space-x-2">
                      <button
                        className="bg-purple-500 px-3 py-1 rounded-lg hover:bg-purple-600 transition text-white shadow-md"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500/70 px-3 py-1 rounded-lg hover:bg-gray-600/80 transition text-white shadow-md"
                        onClick={() => setEditId(null)}
                      >
                        Cancel
                      </button>
                    </td>

                  </>
                ) : (
                  <>
                    <td className="p-2">{u.firstName}</td>
                    <td className="p-2">{u.lastName}</td>
                    <td className="p-2">{u.username}</td>
                    <td className="p-2">{u.password}</td>
                    <td className="p-2 pl-4 space-x-2">
                      <button
                        className="bg-purple-500 px-3 py-1 rounded-lg hover:bg-purple-600 transition text-white shadow-md"
                        onClick={() => handleEdit(u)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-purple-500 px-3 py-1 rounded-lg hover:bg-purple-600 transition text-white shadow-md"
                        onClick={() => handleDelete(u._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-center">
          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
      </div>  
    </div>
  );
}
