class Item {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class Pedido {
  constructor() {
    this.pedidos = [];
  }
  adicionarPedido(pedido) {
    console.log(
      "novo pedido adicionado ",
      "nome : " + pedido.name + ", valor = " + pedido.value
    );
    this.pedidos.push(pedido);
  }

  verMeusPedidos() {
    return this.pedidos;
  }
}
const novopedido1 = new Pedido();

novopedido1.adicionarPedido(new Item("hamburger", 1.9));
novopedido1.adicionarPedido(new Item("batata frita", 1.0));

console.log(novopedido1.verMeusPedidos());
