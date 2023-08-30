export default function Modal({ onClearList, items, handleCloseModal }) {
  return (
    <div className="modal">
      <h2>Do you wanna delete everything?</h2>
      <button onClick={onClearList}>Yes</button>
      <button onClick={handleCloseModal}>No</button>
    </div>
  );
}
