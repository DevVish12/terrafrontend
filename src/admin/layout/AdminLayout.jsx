import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { createElement } from "react";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Gift,
  MessageCircle,
  BookOpen,
  Store,
  Star,
  LogOut,
} from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* ---------- SIDEBAR ---------- */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        {/* LOGO */}
        <div className="h-16 flex items-center gap-3 px-6 border-b">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
            <UtensilsCrossed className="text-amber-700" />
          </div>
          <div>
            <p className="font-bold text-gray-900 leading-none">
              TERRA DINE
            </p>
            <span className="text-xs text-gray-500">Admin Panel</span>
          </div>
        </div>

        {/* MENU */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          <MenuLink to="/admin" icon={LayoutDashboard} label="Dashboard" />
          <MenuLink to="/admin/contacts" icon={MessageCircle} label="Contacts" />
          <MenuLink to="/admin/menus" icon={BookOpen} label="Menus" />
          <MenuLink to="/admin/restaurants" icon={Store} label="Restaurants" />
          <MenuLink to="/admin/catering" icon={Gift} label="Catering" />
          <MenuLink to="/admin/offers" icon={Gift} label="Offers" />
          <MenuLink to="/admin/happy-cards" icon={Gift} label="Happiness Cards" />
          <MenuLink
            to="/admin/testimonials"
            icon={Star}
            label="Testimonials"
          />
        </nav>

        {/* LOGOUT */}
        <div className="p-4 border-t">
          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h1 className="font-semibold text-gray-800">Admin Dashboard</h1>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/* ---------- MENU LINK ---------- */
function MenuLink({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          isActive
            ? "bg-amber-100 text-amber-700"
            : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      {createElement(Icon, { size: 18 })}
      {label}
    </NavLink>
  );
}
