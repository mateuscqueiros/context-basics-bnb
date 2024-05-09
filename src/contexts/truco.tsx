import { ReactElement, createContext, useContext, useState } from 'react';

const TrucoContext = createContext<any>(null);

const createTrucoContext = () => {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  return {
    teamA,
    teamB,
    incrementA: () => setTeamA((value) => value + 1),
    incrementB: () => setTeamB((value) => value + 1),
  };
};

export const TrucoContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <TrucoContext.Provider value={createTrucoContext()}>
      {children}
    </TrucoContext.Provider>
  );
};

export const useTrucoContext = () => useContext(TrucoContext);
