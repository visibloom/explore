export function Button({ attributes = {}, label }) {
  var id = attributes.id;
  var click = attributes.click;
  var className = attributes.className;

  return (
    <button className={className} id={id} onClick={click}>
      {label}
    </button>
  );
}

export function ButtonIcon({ pathlink = "", className = 'visiIconBtn' , IconComponent }) {
  return (
    <a href={pathlink} className={className}>
      {IconComponent}
    </a>
  );
}
