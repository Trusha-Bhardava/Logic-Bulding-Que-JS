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
    let node4 = new Node(40);
    let node5 = new Node(50);


    // Connect nodes
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    // set node as head
    let head = node1;

    // put both in head
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null)
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    console.log(slow.data);
