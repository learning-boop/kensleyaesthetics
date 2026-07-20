import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentContext = createContext(null);

export function AppointmentProvider({ children }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <AppointmentContext.Provider value={{
      open,
      openDrawer:  () => navigate('/book'),
      closeDrawer: () => setOpen(false),
    }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  return useContext(AppointmentContext);
}
