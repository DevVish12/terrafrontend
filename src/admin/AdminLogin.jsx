// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!form.email) newErrors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       newErrors.email = "Enter a valid email";

//     if (!form.password) newErrors.password = "Password is required";
//     else if (form.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("");
//     if (!validate()) return;

//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: form.email,
//           password: form.password,
//         }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Login failed");
//       setStatus("Logged in successfully");
//       setErrors({});
//       // Store minimal admin info; in real app use token/JWT
//       localStorage.setItem("admin", JSON.stringify(data.admin));
//       navigate("/admin/dashboard", { replace: true });
//     } catch (err) {
//       setStatus("");
//       setErrors({ api: err.message });
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
//       <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1" htmlFor="email">
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
//             placeholder="admin@example.com"
//           />
//           {errors.email && (
//             <p className="text-red-600 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1" htmlFor="password">
//             Password
//           </label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
//             placeholder="Enter password"
//           />
//           {errors.password && (
//             <p className="text-red-600 text-sm mt-1">{errors.password}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-black text-white py-2 rounded hover:opacity-90"
//         >
//           Login
//         </button>
//         <p className="text-sm text-gray-600 text-center">
//           Don't have an account?{" "}
//           <Link className="text-blue-600" to="/admin/register">
//             Register
//           </Link>
//         </p>
//       </form>
//       {status && <p className="text-green-700 text-sm mt-3">{status}</p>}
//       {errors.api && <p className="text-red-700 text-sm mt-1">{errors.api}</p>}
//     </div>
//   );
// }

import { Lock, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      setStatus("Logged in successfully");
      setErrors({});
      localStorage.setItem("admin", JSON.stringify(data.admin));
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      setStatus("");
      setErrors({ api: err.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto w-14 h-14 rounded-full bg-black flex items-center justify-center mb-4">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
          <p className="text-sm text-gray-600 mt-1">
            Sign in to access admin dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="admin@example.com"
                className="w-full pl-10 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full pl-10 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            {errors.password && (
              <p className="text-red-600 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>

          {/* Register link */}
          <p className="text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <Link
              to="/admin/register"
              className="text-black font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>

        {/* Status */}
        {status && (
          <p className="text-green-700 text-sm text-center mt-4">{status}</p>
        )}
        {errors.api && (
          <p className="text-red-700 text-sm text-center mt-2">{errors.api}</p>
        )}
      </div>
    </div>
  );
}
