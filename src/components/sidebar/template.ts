const template = `
  <div class="sidebar-options m-10">
    {{{ options }}}
    {{{linkToProfile}}}
  </div>
  {{{search}}}
  {{{chats}}}
  <div class="menu" id="SidebarMenu">
    <div class="m-10 ta-r">
      <img class="menu-close" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiIgaWQ9IkxheWVyXzIiPjxwYXRoIGQ9Ik0xNiwyOUExMywxMywwLDEsMSwyOSwxNiwxMywxMywwLDAsMSwxNiwyOVpNMTYsNUExMSwxMSwwLDEsMCwyNywxNiwxMSwxMSwwLDAsMCwxNiw1WiIvPjxwYXRoIGQ9Ik0xMS43NiwyMS4yNGExLDEsMCwwLDEtLjcxLS4yOSwxLDEsMCwwLDEsMC0xLjQxbDguNDktOC40OUExLDEsMCwwLDEsMjEsMTIuNDZMMTIuNDYsMjFBMSwxLDAsMCwxLDExLjc2LDIxLjI0WiIvPjxwYXRoIGQ9Ik0yMC4yNCwyMS4yNGExLDEsMCwwLDEtLjctLjI5bC04LjQ5LTguNDlhMSwxLDAsMCwxLDEuNDEtMS40MUwyMSwxOS41NEExLDEsMCwwLDEsMjEsMjEsMSwxLDAsMCwxLDIwLjI0LDIxLjI0WiIvPjwvZz48ZyBpZD0iZnJhbWUiPjxyZWN0IGNsYXNzPSJjbHMtMSIgaGVpZ2h0PSIzMiIgd2lkdGg9IjMyIi8+PC9nPjwvc3ZnPg==">
    </div>
      {{{ menu }}}
  </div>
`;
export default template;
