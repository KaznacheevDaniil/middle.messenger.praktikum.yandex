export default function render(query, block) {
  const root = document.querySelector(query);
  if(root && typeof root !== null){
    // Можно завязаться на реализации вашего класса Block
    root.appendChild(block.getContent());

    block.dispatchComponentDidMount();

    return root;
  }else{
    console.error(query + ' was not defined!')
  }
}
