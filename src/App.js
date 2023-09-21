import { useEffect, useState } from "react";
import "./styles/App.scss";
import ClientsForm from "./components/ClientsForm";
import ClientsTable from "./components/ClientsTable";
import ClientModal from "./components/UI/modal/ClientModal";
import Header from "./components/Header";
import FilterForm from "./components/UI/filter/FilterForm";
import { useClients } from "./hooks/useClients";
import { debounce } from "./utils/utlis";
import ConfirmationWindow from "./components/ConfirmationWindow";

function App() {
  const [clients, setClients] = useState([
    {
      name: "Илья",
      surname: "Латышев",
      secondname: "Андреевич",
      contacts: [
        {
          type: "email",
          value: "mail@mail.ru",
          id: 111,
        },
        {
          type: "other",
          value: "twitter @someshit",
          id: 112,
        },
        {
          type: "vk",
          value: "vk.com/durov",
          id: 113,
        },
        {
          type: "phone",
          value: "8983658741",
          id: 114,
        },
      ],
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Виктория",
      surname: "Селезнева",
      secondname: "Алексеевна",
      contacts: [
        {
          type: "phone",
          value: "8983658742",
          id: 115,
        },
        {
          type: "email",
          value: "mail@mail.com",
          id: 116,
        },
        {
          type: "fb",
          value: "https://fb.com/id1",
          id: 7123213,
        },
        {
          type: "other",
          value: "twitter @someshit",
          id: 118,
        },
      ],
      id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Роман",
      surname: "Князев",
      secondname: "Фёдорович",
      contacts: [
        {
          type: "email",
          value: "mail@mail.de",
          id: 119,
        },
        {
          type: "phone",
          value: "8983668747",
          id: 110,
        },
        {
          type: "fb",
          value: "fb.com",
          id: 111341,
        },
      ],
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Мирослава",
      surname: "Панова",
      secondname: "Гордеевна",
      contacts: [
        {
          type: "phone",
          value: "8983608747",
          id: 1134322,
        },
        {
          type: "other",
          value: "twitter @someshit2",
          id: 1222213,
        },
      ],
      id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Ксения",
      surname: "Смирнова",
      secondname: "Гордеевна",
      contacts: [
        {
          type: "phone",
          value: "89836087475",
          id: 11231231,
        },
      ],
      id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  const [client, setClient] = useState({
    name: "",
    surname: "",
    secondname: "",
    contacts: [],
  });
	const [contacts, setContacts] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [isClickOutsideModal, setClickOutsideModal] = useState(false);
  const [filter, setFilter] = useState({
    sortBy: "id",
    sortType: "ascend",
    query: "",
  });
  const [editForm, setEditForm] = useState({ opened: false, dirty: false });
  const [delModalVisible, setDelModalVisible] = useState(false);
  const sortedAndFilteredClients = useClients(clients, filter);

  const createClient = (value) => {
    setClients([...clients, value]);
    setClient({ name: "", surname: "", secondname: "", contacts: [] });
    setModalActive(false);
  };

  const editClient = (client) => {
    const editedList = [...clients].filter((cl) => cl.id !== client.id);
    setClients([...editedList, client]);
    setEditForm({ dirty: false, opened: false });
    setModalActive(false);
  };

  const deleteClient = (client) => {
    setClients([...clients].filter((cl) => cl.id !== client.id));
    setModalActive(false);
    setClient({ name: "", surname: "", secondname: "", contacts: [] });
  };

  const openCreateClientModal = () => {
    setEditForm({ dirty: false, opened: false });
    setDelModalVisible(false);
    setModalActive(true);
    setClient({ ...client, name: "", surname: "", secondname: "" });
  };

  const openEditModal = (client) => {
    setDelModalVisible(false);
    setModalActive(true);
    setEditForm({ ...editForm, opened: true });
    setClient(client);
  };

  const openDeleteModal = (client) => {
    setModalActive(true);
    setDelModalVisible(true);
    setClient(client);
  };

	useEffect(() => {console.log(editForm)}, [editForm])

  const closeModal = () => {
    if (!editForm) {
      setClient({ name: "", surname: "", secondname: "", contacts: [] });
    }
    setModalActive(false);
    setEditForm({ dirty: false, opened: false });
  };

  useEffect(() => {
    if (!modalActive) {
      setClient({ name: "", surname: "", secondname: "", contacts: [] });
    }
  }, [editForm.opened]);

  const onChangeFilterHandler = (value) => {
    setFilter({ ...filter, query: value });
  };
  const debounceOnChangeFilterHandler = debounce(onChangeFilterHandler, 300);

  return (
    <div className="App">
      <Header>
        <FilterForm onChangeFilterHandler={debounceOnChangeFilterHandler} />
      </Header>
      <ClientModal
        modalActive={modalActive}
        closeModal={() => {
          setModalActive(false);
          setClickOutsideModal(true);
          setEditForm({ dirty: false, opened: false });
        }}
      >
        {delModalVisible ? (
          <ConfirmationWindow
            client={client}
            closeModal={closeModal}
            deleteClient={deleteClient}
          />
        ) : (
          <ClientsForm
            client={client}
            setClient={setClient}
            closeModal={closeModal}
            createClient={createClient}
            editClient={editClient}
            editForm={editForm}
            setEditForm={setEditForm}
            openDeleteModal={openDeleteModal}
            isClickOutsideModal={isClickOutsideModal}
            setClickOutsideModal={setClickOutsideModal}
          />
        )}
      </ClientModal>
      <h2>Клиенты</h2>
      <ClientsTable
        clients={sortedAndFilteredClients}
        filter={filter}
        setFilter={setFilter}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />
      <button onClick={openCreateClientModal}>Добавить клиента</button>
    </div>
  );
}

export default App;
