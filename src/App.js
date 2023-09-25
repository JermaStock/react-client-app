import "./styles/main.scss";
import ClientsForm from "./components/ClientsForm";
import ClientsTable from "./components/ClientsTable";
import ClientModal from "./components/UI/modal/ClientModal";
import Header from "./components/Header";
import FilterForm from "./components/UI/filter/FilterForm";
import ConfirmationWindow from "./components/ConfirmationWindow";
import Logo from "./components/UI/logo/Logo";
import AddClientButton from "./components/UI/addClientButton/AddClientButton";

import { useDispatch, useSelector } from "react-redux";
import {
  changeDeleteModalVisible,
  changeModalVisible,
} from "./store/modalSlice";
import { clearClient, handleClient } from "./store/clientsSlice";
import { changeFormOpening, resetFormHandler } from "./store/formSlice";

function App() {
  const modal = useSelector((store) => store.modal);
  const editForm = useSelector((store) => store.form);
  const dispatch = useDispatch();

  const openCreateClientModal = () => {
    dispatch(changeDeleteModalVisible(false));
    dispatch(changeModalVisible(true));
    dispatch(clearClient());
  };

  const openEditModal = (client) => {
    dispatch(changeDeleteModalVisible(false));
    dispatch(changeModalVisible(true));
    dispatch(changeFormOpening({ opened: true }));
    dispatch(handleClient(client));
  };

  const openDeleteModal = (client) => {
    dispatch(changeModalVisible(true));
    dispatch(changeDeleteModalVisible(true));
    dispatch(handleClient(client));    
  };

  const closeModal = () => {
    dispatch(changeModalVisible(false));
    dispatch(resetFormHandler());
  };

  return (
    <div className="App">
      <Header>
        <Logo width={50} height={50} color={"#9873FF"} />
        <FilterForm />
      </Header>
      <ClientModal closeModal={closeModal}>
        {modal.delModalVisible ? (
          <ConfirmationWindow closeModal={closeModal} />
        ) : (
          <ClientsForm
            closeModal={closeModal}
            openDeleteModal={openDeleteModal}
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
