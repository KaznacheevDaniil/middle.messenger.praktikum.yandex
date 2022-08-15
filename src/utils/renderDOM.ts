export default function render(query, block) {
  const root = document.querySelector(query);
  try {
    // Можно завязаться на реализации вашего класса Block
    root.appendChild(block.getContent());
    block.dispatchComponentDidMount();
  } catch (error) {
    console.error(`${query} was not defined!`);
  }
  return root;
}
