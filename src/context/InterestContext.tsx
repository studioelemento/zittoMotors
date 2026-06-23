import { createContext, Dispatch, SetStateAction, useState } from "react";
import InterestModal from "../page/landing/home/components/InterestModal";

export const InterestContext = createContext<{handleShowInterestModal : ()=>void, handleCloseInterestModal : ()=>void} | null>(
  null,
);

export function InterestProvider({ children }: { children: React.ReactNode }) {
  const [showInterestModal, setShowInterestModal] = useState(false);
  const handleShowInterestModal = ()=> {
    setShowInterestModal(true)
  }
  const handleCloseInterestModal = () => {
    setShowInterestModal(false)
  }

  return (
    <InterestContext.Provider value={{handleCloseInterestModal, handleShowInterestModal}}>
      {children}

      <InterestModal
        isOpen={showInterestModal}
        onClose={() => setShowInterestModal(false)}
      />
    </InterestContext.Provider>
  );
}
