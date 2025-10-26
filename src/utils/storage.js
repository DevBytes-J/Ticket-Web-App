const isClaudeEnvironment = typeof window !== "undefined" && window.storage;

export const storage = {
  async getSession() {
    try {
      if (isClaudeEnvironment) {
        const data = await window.storage.get("ticketapp_session");
        return data ? JSON.parse(data.value) : null;
      } else {
        // Fallback to localStorage
        const data = localStorage.getItem("ticketapp_session");
        return data ? JSON.parse(data) : null;
      }
    } catch {
      return null;
    }
  },

  async setSession(user) {
    if (isClaudeEnvironment) {
      await window.storage.set("ticketapp_session", JSON.stringify(user));
    } else {
      // Fallback to localStorage
      localStorage.setItem("ticketapp_session", JSON.stringify(user));
    }
  },

  async clearSession() {
    if (isClaudeEnvironment) {
      await window.storage.delete("ticketapp_session");
    } else {
      // Fallback to localStorage
      localStorage.removeItem("ticketapp_session");
    }
  },

  async getTickets() {
    try {
      if (isClaudeEnvironment) {
        const data = await window.storage.get("ticketapp_tickets");
        return data ? JSON.parse(data.value) : [];
      } else {
        // Fallback to localStorage
        const data = localStorage.getItem("ticketapp_tickets");
        return data ? JSON.parse(data) : [];
      }
    } catch {
      return [];
    }
  },

  async setTickets(tickets) {
    if (isClaudeEnvironment) {
      await window.storage.set("ticketapp_tickets", JSON.stringify(tickets));
    } else {
      // Fallback to localStorage
      localStorage.setItem("ticketapp_tickets", JSON.stringify(tickets));
    }
  },
};
