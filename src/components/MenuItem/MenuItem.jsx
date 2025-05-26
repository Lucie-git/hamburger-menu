import './style.css';

export const MenuItem = ({ text, onSelecet }) => {
  return (
    <a href="#" className="menu-item" onClick={onSelecet}>
      {text}
    </a>
  );
};
