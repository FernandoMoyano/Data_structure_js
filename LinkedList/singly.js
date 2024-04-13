//1-- > 2-- > 3-- > 4-- > 5-- > null;

/* let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
}; */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    // Aqui sucede la magia ✨
    // Todo lo que modifiquemos en los atributos de tail
    // se modificará en la estructura inicial
    // por la RERENCIA!
    this.tail = this.head;

    this.length = 1;
  }

  append() {
    // aquí estamos creando un nuevo nodo
    const newNode = new Node(value);

    // Como mencionamos anteriormente
    // si modificamos la cola por la REFERENCIA
    // se modificará la estructura inicial! 🖊
    this.tail.next = newNode;
    // Pero aun tail sigue apuntando a la CABEZA
    // de la estructura inicial entonces es momento
    // de apuntar al nuevo nodo creado para que posteriormente
    // podamos agregar más nodos! 🚀
    this.tail = newNode;
    // Finalmente aumentamos el tamaño definido de
    // nuestra estructura 👨‍🔧
    this.length++;

    return this;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
