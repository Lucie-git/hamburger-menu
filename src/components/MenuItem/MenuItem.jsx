import './style.css';

export const MenuItem = ({ text, onSelect, pageTitle }) => {
  return (
    <a href="#" className="menu-item" onClick={() => onSelect(pageTitle)}>
      {text}
    </a>
  );
};
