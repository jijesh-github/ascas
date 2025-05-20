'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface DoctorFormContextType {
  showForm: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const DoctorFormContext = createContext<DoctorFormContextType | undefined>(undefined);

export const useDoctorForm = () => {
  const context = useContext(DoctorFormContext);
  if (!context) throw new Error('useDoctorForm must be used within DoctorFormProvider');
  return context;
};

export const DoctorFormProvider = ({ children }: { children: ReactNode }) => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return <DoctorFormContext.Provider value={{ showForm, openForm, closeForm }}>{children}</DoctorFormContext.Provider>;
};
