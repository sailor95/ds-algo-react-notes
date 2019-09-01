class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root.value === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // find(value) {
    //     if (this.root === null) return false;
    //     var current = this.root;
    //     while (true) {
    //         if (current.value === value) return true;
    //         if (current.value > value) {
    //             if (current.left === null) return false;
    //             current = current.left;
    //         } else {
    //             if (current.right === null) return false;
    //             current = current.right;
    //         }
    //     }
    // }

    find(value, node = this.root) {
        if (!node) return false;
        if (node.value === value) return true;
        if (node.value > value) {
            return this.find(value, node.left);
        } else {
            return this.find(value, node.right);
        }
    }

}



console.log(tree);