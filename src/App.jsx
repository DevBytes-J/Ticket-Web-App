import { useState, useEffect } from "react";
import { LandingPage } from "./pages/LandingPage";
import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";
import { TicketsPage } from "./pages/TicketsPage";
import { Toast } from "./components/layout/Toast";
import { storage } from "./utils/storage";
import { validateAuthForm, validateTicketForm } from "./utils/validation";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteTicketId, setDeleteTicketId] = useState(null);
  const [editingTicket, setEditingTicket] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    status: "open",
  });
  const [formErrors, setFormErrors] = useState({});
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [authErrors, setAuthErrors] = useState({});
  const [authMode, setAuthMode] = useState("login");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    const loadData = async () => {
      const sessionUser = await storage.getSession();
      const storedTickets = await storage.getTickets();
      if (sessionUser) {
        setUser(sessionUser);
        setCurrentPage("dashboard");
      }
      setTickets(storedTickets);
    };
    loadData();
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
  };

  const saveTickets = async (newTickets) => {
    setTickets(newTickets);
    await storage.setTickets(newTickets);
  };

  const handleAuth = async () => {
    const errors = validateAuthForm(authForm, authMode);
    setAuthErrors(errors);
    if (Object.keys(errors).length > 0) {
      showToast("Please fix the errors in the form", "error");
      return;
    }
    const newUser = {
      email: authForm.email,
      name: authForm.name || authForm.email.split("@")[0],
    };
    setUser(newUser);
    await storage.setSession(newUser);
    setCurrentPage("dashboard");
    showToast(`Welcome ${newUser.name}!`, "success");
  };

  const handleLogout = async () => {
    setUser(null);
    await storage.clearSession();
    setCurrentPage("landing");
    showToast("Logged out successfully", "success");
  };

  const handleTicketSubmit = async () => {
    const errors = validateTicketForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    if (editingTicket) {
      const updated = tickets.map((t) =>
        t.id === editingTicket.id
          ? {
              ...formData,
              id: t.id,
              createdAt: t.createdAt,
              updatedAt: new Date().toISOString(),
            }
          : t
      );
      await saveTickets(updated);
      showToast("Ticket updated successfully", "success");
    } else {
      const newTicket = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await saveTickets([...tickets, newTicket]);
      showToast("Ticket created successfully", "success");
    }
    closeModal();
  };

  const confirmDelete = (id) => {
    setDeleteTicketId(id);
    setShowDeleteConfirm(true);
  };

  const deleteTicket = async () => {
    await saveTickets(tickets.filter((t) => t.id !== deleteTicketId));
    setShowDeleteConfirm(false);
    setDeleteTicketId(null);
    showToast("Ticket deleted successfully", "success");
  };

  const openModal = (ticket = null) => {
    if (ticket) {
      setEditingTicket(ticket);
      setFormData({
        title: ticket.title,
        description: ticket.description,
        priority: ticket.priority,
        status: ticket.status,
      });
    } else {
      setEditingTicket(null);
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        status: "open",
      });
    }
    setFormErrors({});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingTicket(null);
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      status: "open",
    });
    setFormErrors({});
  };

  const requireAuth = (page) => {
    if (!user) {
      showToast("Your session has expired — please log in again.", "error");
      setCurrentPage("auth");
      return false;
    }
    setCurrentPage(page);
    return true;
  };

  const getStats = () => ({
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in_progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  });

  return (
    <>
      {currentPage === "landing" && <LandingPage onNavigate={setCurrentPage} />}

      {currentPage === "auth" && (
        <AuthPage
          authMode={authMode}
          setAuthMode={setAuthMode}
          authForm={authForm}
          setAuthForm={setAuthForm}
          authErrors={authErrors}
          onAuth={handleAuth}
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === "dashboard" && (
        <DashboardPage
          user={user}
          onLogout={handleLogout}
          onNavigate={requireAuth}
          stats={getStats()}
        />
      )}

      {currentPage === "tickets" && (
        <TicketsPage
          user={user}
          onLogout={handleLogout}
          onNavigate={requireAuth}
          tickets={tickets}
          showModal={showModal}
          showDeleteConfirm={showDeleteConfirm}
          onOpenModal={openModal}
          onCloseModal={closeModal}
          onSubmitTicket={handleTicketSubmit}
          onConfirmDelete={confirmDelete}
          onCancelDelete={() => setShowDeleteConfirm(false)}
          onDeleteTicket={deleteTicket}
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          editingTicket={editingTicket}
        />
      )}

      <Toast show={toast.show} message={toast.message} type={toast.type} />
    </>
  );
}

export default App;
