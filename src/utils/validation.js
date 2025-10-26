export const validateAuthForm = (authForm, authMode) => {
  const errors = {};
  if (!authForm.email) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(authForm.email))
    errors.email = "Email is invalid";
  if (!authForm.password) errors.password = "Password is required";
  else if (authForm.password.length < 6)
    errors.password = "Password must be at least 6 characters";
  if (authMode === "register" && !authForm.name)
    errors.name = "Name is required";
  return errors;
};

export const validateTicketForm = (formData) => {
  const errors = {};
  if (!formData.title || formData.title.trim() === "")
    errors.title = "Title is required";
  if (!formData.status) errors.status = "Status is required";
  if (!["open", "in_progress", "closed"].includes(formData.status)) {
    errors.status = "Status must be open, in_progress, or closed";
  }
  if (formData.description && formData.description.length > 500) {
    errors.description = "Description must be less than 500 characters";
  }
  return errors;
};
