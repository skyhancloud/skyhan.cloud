import { LanternUserResponse } from '@/types';
import { create } from 'zustand';

interface DiscordUserStore {
  data: LanternUserResponse | null;
  setData: (data: LanternUserResponse) => void;
}

export const useDiscordUserStore = create<DiscordUserStore>(set => ({
  data: null,
  setData: (data: LanternUserResponse) => set({ data })
}));