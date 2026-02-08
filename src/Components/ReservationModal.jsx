

// import { useMemo, useState } from "react";
// import { useReservation } from "../context/ReservationContext";

// const ReservationModal = () => {
//   const { isOpen, payload, closeReservation } = useReservation();

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [guests, setGuests] = useState("2");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [notes, setNotes] = useState("");
//   const [toast, setToast] = useState({ show: false, text: "", color: "green" });

//   const WHATSAPP_NUMBER = "919859581111";
//   const today = useMemo(() => new Date().toISOString().split("T")[0], []);
//   const restaurantLabel = payload?.restaurantName || "TERRA DINE N WINE";

//   const whatsappHref = useMemo(() => {
//     const text = `Hello, I'd like to reserve a table at ${restaurantLabel}:
// 📅 Date: ${date}
// ⏰ Time: ${time}
// 👥 Guests: ${guests}
// 👤 Name: ${name}
// 📱 Phone: ${phone}
// 📝 Notes: ${notes || "None"}`;
//     return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
//   }, [date, time, guests, name, phone, notes, restaurantLabel]);

//   const showToast = (text, color = "green") => {
//     setToast({ show: true, text, color });
//     setTimeout(() => setToast((t) => ({ ...t, show: false })), 3000);
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Fonts */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link
//         rel="preconnect"
//         href="https://fonts.gstatic.com"
//         crossOrigin="anonymous"
//       />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&display=swap"
//         rel="stylesheet"
//       />

//       {/* Overlay */}
//       <div
//         className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
//         onClick={(e) => e.target === e.currentTarget && closeReservation()}
//       >
//         {/* Modal */}
//         <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
//           {/* Header */}
//           <div className="flex items-center justify-between px-6 py-4 border-b">
//             <div className="flex items-center gap-3">
//               <img src="/logo.png" alt="Terra Dine N Wine" className="h-10" />
//               <h3 className="font-['Playfair_Display'] text-xl text-[#6B3E2E]">
//                 Reserve a Table
//               </h3>
//             </div>
//             <button
//               onClick={closeReservation}
//               className="text-gray-500 hover:text-gray-800 text-xl"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Restaurant + Timing */}
//           <div className="px-6 pt-4">
//             <div className="flex flex-wrap items-center gap-3">
//               <span className="px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 font-semibold text-sm">
//                 {restaurantLabel}
//               </span>
//               <span className="px-4 py-1.5 rounded-full bg-green-50 text-green-700 font-semibold text-sm">
//                 ⏰ 11:00 AM – 1:00 AM
//               </span>
//             </div>
//           </div>

//           {/* Form */}
//           <form
//             className="p-6 space-y-4 font-['Poppins']"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Full Name"
//                 className="input"
//               />
//               <input
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Mobile Number"
//                 className="input"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email (optional)"
//                 className="input"
//               />
//               <select
//                 value={guests}
//                 onChange={(e) => setGuests(e.target.value)}
//                 className="input"
//               >
//                 {Array.from({ length: 12 }).map((_, i) => {
//                   const n = i + 1;
//                   return (
//                     <option key={n} value={n}>
//                       {n} {n === 1 ? "Person" : "People"}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="date"
//                 required
//                 min={today}
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="input"
//               />
//               <input
//                 type="time"
//                 required
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="input"
//               />
//             </div>

//             <textarea
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               placeholder="Special requests (optional)"
//               className="input h-24 resize-none"
//             />

//             {/* CTA */}
//             <a
//               href={whatsappHref}
//               target="_blank"
//               rel="noreferrer"
//               onClick={(e) => {
//                 if (!name || !phone || !date || !time) {
//                   e.preventDefault();
//                   showToast("Please fill all required fields", "red");
//                 } else {
//                   setTimeout(() => {
//                     closeReservation();
//                     setName("");
//                     setPhone("");
//                     setEmail("");
//                     setGuests("2");
//                     setDate("");
//                     setTime("");
//                     setNotes("");
//                   }, 150);
//                 }
//               }}
//               className="block w-full text-center py-3 rounded-xl
//               bg-green-600 hover:bg-green-700
//               text-white font-semibold text-lg transition shadow-lg"
//             >
//               Reserve via WhatsApp
//             </a>
//           </form>
//         </div>
//       </div>

//       {/* Toast */}
//       {toast.show && (
//         <div className="fixed right-4 bottom-6 z-50">
//           <div
//             className="px-4 py-3 rounded-lg text-white shadow-lg"
//             style={{
//               backgroundColor: toast.color === "green" ? "#059669" : "#dc2626",
//             }}
//           >
//             {toast.text}
//           </div>
//         </div>
//       )}

//       {/* Styles */}
//       <style>{`
//         .input {
//           width: 100%;
//           padding: 0.75rem 1rem;
//           border-radius: 0.75rem;
//           border: 1px solid #e5e7eb;
//           font-size: 0.95rem;
//           outline: none;
//         }
//         .input:focus {
//           border-color: #ea580c;
//           box-shadow: 0 0 0 3px rgba(234,88,12,0.15);
//         }
//       `}</style>
//     </>
//   );
// };

// export default ReservationModal;


import { useMemo, useState } from "react";
import {
  User,
  Phone,
  Mail,
  Users,
  Calendar,
  Clock,
  MessageSquare,
  X,
} from "lucide-react";
import { useReservation } from "../context/ReservationContext";

const ReservationModal = () => {
  const { isOpen, payload, closeReservation } = useReservation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [toast, setToast] = useState({ show: false, text: "", color: "green" });

  const WHATSAPP_NUMBER = "919859581111";
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const restaurantLabel = payload?.restaurantName || "TERRA DINE N WINE";

  /* ---------- WHATSAPP MESSAGE (IMPROVED) ---------- */
  const whatsappHref = useMemo(() => {
    const text = `
Hello Terra Team 👋

I would like to reserve a table at *${restaurantLabel}*.

📅 Date: ${date}
⏰ Time: ${time}
👥 Guests: ${guests}

👤 Name: ${name}
📞 Phone: ${phone}
✉️ Email: ${email || "Not provided"}

📝 Special Request:
${notes || "No special requests"}

Thank you!
    `.trim();

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [date, time, guests, name, phone, email, notes, restaurantLabel]);

  const showToast = (text, color = "green") => {
    setToast({ show: true, text, color });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* OVERLAY */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center
        bg-black/60 backdrop-blur-sm px-4"
        onClick={(e) => e.target === e.currentTarget && closeReservation()}
      >
        {/* MODAL */}
        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Terra" className="h-9" />
              <h3 className="font-['Playfair_Display'] text-2xl text-[#6B3E2E]">
                Reserve a Table
              </h3>
            </div>
            <button
              onClick={closeReservation}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X />
            </button>
          </div>

          {/* BADGES */}
          <div className="px-6 pt-4 flex flex-wrap gap-3">
            <span className="badge-orange">{restaurantLabel}</span>
            <span className="badge-green">⏰ 11:00 AM – 1:00 AM</span>
          </div>

          {/* FORM */}
          <form
            className="p-6 space-y-5 font-['Poppins']"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input icon={<User />} placeholder="Full Name" value={name} set={setName} required />
              <Input icon={<Phone />} placeholder="Mobile Number" value={phone} set={setPhone} required />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Input icon={<Mail />} placeholder="Email (optional)" value={email} set={setEmail} />
              <Select icon={<Users />} value={guests} set={setGuests} />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="date" icon={<Calendar />} value={date} set={setDate} min={today} required />
              <Input type="time" icon={<Clock />} value={time} set={setTime} required />
            </div>

            <Textarea icon={<MessageSquare />} value={notes} set={setNotes} />

            {/* CTA */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (!name || !phone || !date || !time) {
                  e.preventDefault();
                  showToast("Please fill all required fields", "red");
                } else {
                  setTimeout(() => {
                    closeReservation();
                    setName("");
                    setPhone("");
                    setEmail("");
                    setGuests("2");
                    setDate("");
                    setTime("");
                    setNotes("");
                  }, 200);
                }
              }}
              className="block w-full text-center py-4 rounded-xl
              bg-[#25D366] hover:bg-[#1DA851]
              text-white font-semibold text-lg transition shadow-lg"
            >
              Reserve via WhatsApp
            </a>
          </form>
        </div>
      </div>

      {/* TOAST */}
      {toast.show && (
        <div className="fixed right-4 bottom-6 z-50">
          <div
            className="px-4 py-3 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: toast.color === "green" ? "#059669" : "#dc2626" }}
          >
            {toast.text}
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .badge-orange {
          background:#fff7ed;
          color:#c2410c;
          padding:6px 14px;
          border-radius:999px;
          font-weight:600;
          font-size:13px;
        }
        .badge-green {
          background:#ecfdf5;
          color:#047857;
          padding:6px 14px;
          border-radius:999px;
          font-weight:600;
          font-size:13px;
        }
        .field {
          display:flex;
          align-items:center;
          gap:10px;
          border:1px solid #e5e7eb;
          border-radius:14px;
          padding:12px 14px;
        }
        .field input, .field select, .field textarea {
          width:100%;
          outline:none;
          font-size:14px;
        }
        .field:focus-within {
          border-color:#ea580c;
          box-shadow:0 0 0 3px rgba(234,88,12,.15);
        }
        @keyframes fadeIn {
          from { opacity:0; transform:scale(.96) }
          to { opacity:1; transform:scale(1) }
        }
        .animate-fadeIn { animation:fadeIn .25s ease-out }
      `}</style>
    </>
  );
};

/* ---------- REUSABLE INPUTS ---------- */
const Input = ({ icon, set, ...props }) => (
  <div className="field">
    {icon}
    <input {...props} onChange={(e) => set(e.target.value)} />
  </div>
);

const Select = ({ icon, value, set }) => (
  <div className="field">
    {icon}
    <select value={value} onChange={(e) => set(e.target.value)}>
      {Array.from({ length: 12 }).map((_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1} {i === 0 ? "Person" : "People"}
        </option>
      ))}
    </select>
  </div>
);

const Textarea = ({ icon, value, set }) => (
  <div className="field">
    {icon}
    <textarea
      rows={3}
      placeholder="Special requests (optional)"
      value={value}
      onChange={(e) => set(e.target.value)}
    />
  </div>
);

export default ReservationModal;
