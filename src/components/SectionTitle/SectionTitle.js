import './SectionTitle.css';

function SectionTitle({ name, id }) {
  return (
    <h2 className="section-title" id={id}>
      {name}
    </h2>
  );
}

export default SectionTitle;