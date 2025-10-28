import { Plus, Ticket as TicketIcon } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { TicketCard } from "../components/tickets/TicketCard";
import { TicketModal } from "../components/tickets/TicketModal";
import { DeleteConfirmModal } from "../components/tickets/DeleteConfirmModal";
import { Footer } from "../components/layout/Footer";

export const TicketsPage = ({
  user,
  onLogout,
  onNavigate,
  tickets,
  showModal,
  showDeleteConfirm,
  onOpenModal,
  onCloseModal,
  onSubmitTicket,
  onConfirmDelete,
  onCancelDelete,
  onDeleteTicket,
  formData,
  setFormData,
  formErrors,
  editingTicket,
}) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Navbar
      user={user}
      onLogout={onLogout}
      onNavigate={onNavigate}
      currentPage="tickets"
    />

    <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6 border-b flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">All Tickets</h2>
          <button
            onClick={() => onOpenModal()}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-pink-500 transition hover:cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            New Ticket
          </button>
        </div>
        <div className="p-6">
          {tickets.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <TicketIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">
                No tickets yet. Create your first ticket!
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onEdit={onOpenModal}
                  onDelete={onConfirmDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>

    <Footer />

    <TicketModal
      isOpen={showModal}
      onClose={onCloseModal}
      onSubmit={onSubmitTicket}
      formData={formData}
      setFormData={setFormData}
      formErrors={formErrors}
      isEditing={!!editingTicket}
    />

    <DeleteConfirmModal
      isOpen={showDeleteConfirm}
      onConfirm={onDeleteTicket}
      onCancel={onCancelDelete}
    />
  </div>
);
