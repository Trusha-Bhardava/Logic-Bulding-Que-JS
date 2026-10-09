class Node {
    // constructor will run automatically when we create new node
    constructor(data)
    {
        // store value inside the node
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);

node1.next = node2;
node2.next = node3;

let head = node1;

let current = head;

while (current !== null)
{
    console.log(current.data);
    current = current.next;
}