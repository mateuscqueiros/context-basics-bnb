import { create } from 'zustand';

export const useTrucoStore = create((set) => ({
  teamA: 0,
  teamB: 0,
  incrementA: () => set((state: any) => ({ ...state, teamA: state.teamA + 1 })),
  incrementB: () => set((state: any) => ({ ...state, teamB: state.teamB + 1 })),
}));
