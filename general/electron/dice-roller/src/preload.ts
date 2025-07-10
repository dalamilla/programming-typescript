import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getRandom: () => ipcRenderer.invoke('handleRandom'),
});
