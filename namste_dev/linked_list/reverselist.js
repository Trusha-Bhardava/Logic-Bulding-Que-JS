class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}  

// Create nodes
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);


// Connect nodes
node1.next = node2;
node2.next = node3;


// Head
let head = node1;

// reverse link lsit
