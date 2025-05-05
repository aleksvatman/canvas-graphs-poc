import { create } from 'zustand'

interface CanvasStore {
  selectedColor?: string
  changeSelectedColor: (newColor: string) => void
  importedJSON?: string
  setImportedJSON: (value: string) => void
  clearImportedJSON: () => void
  currentJSON?: string
  setCurrentJSON: (value: string) => void
}

const useStore = create<CanvasStore>()((set) => ({
  selectedColor: undefined,
  changeSelectedColor: (newColor) => set({ selectedColor: newColor }),
  importedJSON: undefined,
  setImportedJSON: (value) => set({ importedJSON: value }),
  clearImportedJSON: () => set({ importedJSON: undefined }),
  currentJSON: undefined,
  setCurrentJSON: (value: string) => set({currentJSON: value})
}))

export default useStore;

