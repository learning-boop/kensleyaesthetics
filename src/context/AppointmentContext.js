import { createContext, useContext, useState } from 'react';

const AppointmentContext = createContext(null);

export function AppointmentProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <AppointmentContext.Provider value={{
      open,
      openDrawer:  () => setOpen(true),
      closeDrawer: () => setOpen(false),
    }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  return useContext(AppointmentContext);
}
