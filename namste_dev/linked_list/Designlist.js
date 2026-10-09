// create node

class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

// create linked list
class linkedlist{
    // initalize empty link list
    constructor()
    {
        // store entry point of link list
        this.head = null;
    }

    // add new node add beginning
    addFirst(data)
    {
        // instantiate new object which contain provided data
        let newNode = new Node(data);

        // point to new node next pointer to current first node
        newNode.next = this.head;

        // reassign head of list which directly point to new node
        this.head = newNode;
    }


    // add new node at the end of list

    addLast(data) {
        let newNode = new Node(data);

        // if list completely empty
        if(this.head === null)
        {
            // then make new node first node
            this.head = newNode;
            // terminate execution early
            return;
        }

        // initialize tracking pointer at first node
        let current = this.head;

        while (current.next !== null)
        {
            current = current.next;
        }

        // connect to new node
        current.next = newNode;
    }


    // print all nodes
    printlist()
    {
        let current = this.head;

        while (current !== null)
        {
            console.log(current.data);

            current = current.next;
        }
    }

    // get value of particulr index
 get(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {

            if (current === null) {
                return -1;
            }

            current = current.next;
        }

        if (current === null) {
            return -1;
        }

        return current.data;
    }

    // Delete first occurrence of a value
    delete(data)
    {

        // if list is empty
        if(this.head === null)
        {
            return;
        }

        // if head contain value
         if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

         let current = this.head;

         while (
            // check next node is exist
            current.next !== null &&
            // check next node contain value that we want
            current.next.data !== data
        ) 
        {
            // if both condition are true, move to one step forward
            current = current.next;
        }

        // Skip the node
        if (current.next !== null) {
            current.next = current.next.next;
        }
    }
}

let list = new linkedlist();


// Add values
list.addLast(10);
list.addLast(20);
list.addLast(30);

console.log("Original List:");
list.printlist();


// Add at beginning
list.addFirst(5);

console.log("After adding 5 at beginning:");
list.printlist();


// Get value
console.log("Value at index 2:");
console.log(list.get(2));


// Delete 20
list.delete(20);

console.log("After deleting 20:");
list.printlist();
