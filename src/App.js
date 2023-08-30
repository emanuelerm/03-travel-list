import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Modal from "./Modal";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleOpenModal() {
    if (!items.length) return;
    setModal(!modal);
  }

  function handleClearList() {
    setItems([]);
    setModal(!modal);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleOpenModal}
      />
      <Stats items={items} />
      {modal && (
        <Modal
          onClearList={handleClearList}
          handleCloseModal={handleOpenModal}
        />
      )}
    </div>
  );
}
