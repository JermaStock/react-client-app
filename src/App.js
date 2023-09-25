import { useEffect } from "react";
import "./styles/main.scss";
import ClientsForm from "./components/ClientsForm";
import ClientsTable from "./components/ClientsTable";
import ClientModal from "./components/UI/modal/ClientModal";
import Header from "./components/Header";
import FilterForm from "./components/UI/filter/FilterForm";
import { useClients } from "./hooks/useClients";
import { debounce } from "./utils/utlis";
import ConfirmationWindow from "./components/ConfirmationWindow";
import Logo from "./components/UI/logo/Logo";
import AddClientButton from "./components/UI/addClientButton/AddClientButton";

import { useDispatch, useSelector } from "react-redux";
import {
  changeDeleteModalVisible,
  changeModalVisible,
  hadndleClickOutsideModal,
} from "./store/modalSlice";
import { clearClient, handleClient } from "./store/clientsSlice";
import { changeFormOpening, resetFormHandler } from "./store/formSlice";

function App() {
  // const [client, setClient] = useState({
  //   name: "",
  //   surname: "",
  //   secondname: "",
  //   contacts: [],
  // });

  // const [modalActive, setModalActive] = useState(false);
  // const client = useSelector((store) => store.clients.client);
  const modal = useSelector((store) => store.modal);
  const editForm = useSelector((store) => store.form);
  const dispatch = useDispatch();

  // const [isClickOutsideModal, setClickOutsideModal] = useState(false);
  // const [editForm, setEditForm] = useState({ opened: false, dirty: false });
  // const [delModalVisible, setDelModalVisible] = useState(false);

  // const createClient = (value) => {
  //   // setClients([...clients, value]);
  //   // setClient({ name: "", surname: "", secondname: "", contacts: [] });
  //   // setModalActive(false);
  // };

  // const editClient = (client) => {
  //   // const editedList = [...clients].filter((cl) => cl.id !== client.id);
  //   // setClients([...editedList, client]);
  //   // setEditForm({ dirty: false, opened: false });
  //   // setModalActive(false);
  // };

  // const deleteClient = (client) => {
  //   // setClients([...clients].filter((cl) => cl.id !== client.id));
  //   // setModalActive(false);
  //   // setClient({ name: "", surname: "", secondname: "", contacts: [] });
  // };

  const openCreateClientModal = () => {
    // setEditForm({ dirty: false, opened: false });
    // dispatch(resetFormHandler());
    dispatch(changeDeleteModalVisible(false));
    dispatch(changeModalVisible(true));
    // dispatch(hadndleClickOutsideModal(false));
    dispatch(resetFormHandler());
    // dispatch(clearClient());

    // Я не знаю что это делает, возможно пойму позже
    // setClient({ ...client, name: "", surname: "", secondname: "" });
  };

  const openEditModal = (client) => {
    dispatch(changeDeleteModalVisible(false));
    dispatch(changeModalVisible(true));
    // setEditForm({ ...editForm, opened: true });
    dispatch(changeFormOpening({ opened: true }));
    dispatch(handleClient(client));
    // setClient(client);
  };

  const openDeleteModal = (client) => {
    dispatch(changeModalVisible(true));
    dispatch(changeDeleteModalVisible(true));
    dispatch(handleClient(client));
    // setClient(client);
  };

  const closeModal = () => {
    // if (editForm.opened) {
    //   // setClient({ name: "", surname: "", secondname: "", contacts: [] });
    //   dispatch(clearClient());
    // }

    if (editForm.opened) {
      dispatch(clearClient());
    }

    dispatch(changeModalVisible(false));
    // setEditForm({ dirty: false, opened: false });
    dispatch(resetFormHandler());
  };

  // useEffect(() => {
  //   if (!modal.isActive) {
  //     // setClient({ name: "", surname: "", secondname: "", contacts: [] });
  //     console.log(1);
  //     dispatch(clearClient());
  //   }
  // }, [editForm.opened]);

  // const onChangeFilterHandler = (value) => {
  //   setFilter({ ...filter, query: value });
  // };
  // const debounceOnChangeFilterHandler = debounce(onChangeFilterHandler, 300);

  return (
    <div className="App">
      <Header>
        <Logo width={50} height={50} color={"#9873FF"} />
        <FilterForm
        // onChangeFilterHandler={debounceOnChangeFilterHandler}
        />
      </Header>
      <ClientModal
        closeModal={closeModal}
        // closeModalHandler={() => {
        //   closeModal();
        //   // dispatch(changeModalVisible(false));
        //   // dispatch(clearClient());
        //   // setClickOutsideModal(true);
        //   // dispatch(hadndleClickOutsideModal(true));
        //   // setEditForm({ dirty: false, opened: false });
        //   // dispatch(resetFormHandler());
        // }}
      >
        {modal.delModalVisible ? (
          <ConfirmationWindow
            closeModal={closeModal}
            // deleteClient={deleteClient}
          />
        ) : (
          <ClientsForm
            // setClient={setClient}
            closeModal={closeModal}
            // createClient={createClient}
            // editClient={editClient}
            // editForm={editForm}
            // setEditForm={setEditForm}
            openDeleteModal={openDeleteModal}
            // isClickOutsideModal={isClickOutsideModal}
            // setClickOutsideModal={setClickOutsideModal}
          />
        )}
      </ClientModal>
      <div className="container container--table">
        <h2 className="title">Клиенты</h2>
        <ClientsTable
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
        />
        <AddClientButton
          value={"Добавить клиента"}
          onClick={openCreateClientModal}
        />
      </div>
    </div>
  );
}

export default App;
