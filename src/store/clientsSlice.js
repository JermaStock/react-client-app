import { createSlice } from "@reduxjs/toolkit";

const resetedClient = {
  name: "",
  surname: "",
  secondname: "",
  contacts: [],
};

const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    client: { name: "", surname: "", secondname: "", contacts: [] },
  },
  reducers: {
    createClient(state, action) {
      state.clients.push({
        id: Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        surname: action.payload.surname,
        name: action.payload.name,
        secondname: action.payload.secondname,
        contacts: action.payload.contacts,
      });
    },
    editClient(state, action) {
      const editedClient = state.clients.find((c) => c.id === state.client.id);
      editedClient.updatedAt = new Date().toISOString();
      editedClient.surname = action.payload.surname;
      editedClient.name = action.payload.name;
      editedClient.secondname = action.payload.secondname;
      editedClient.contacts = action.payload.contacts;
    },
    deleteClient(state) {
      state.clients = state.clients.filter((c) => c.id !== state.client.id);
    },
    handleClient(state, action) {
      state.client = action.payload;
    },
    clearClient(state) {
      state.client = resetedClient;
    },
  },
});

export const {
  createClient,
  deleteClient,
  editClient,
  handleClient,
  clearClient,
} = clientsSlice.actions;
export default clientsSlice.reducer;
