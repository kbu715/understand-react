
export function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props)
    .forEach(([name, value]) => element.setAttribute(name, value));

  node.children
    .map(createDOM) //NOTE: 재귀 함수 이용
    .forEach(element.appendChild.bind(element)); //NOTE: context 현재 element로 고정시키기

  return element;
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));  
}
