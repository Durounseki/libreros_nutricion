function FeatureList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <b>{item.bold}</b>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
