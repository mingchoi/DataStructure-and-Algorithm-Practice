class List {
  root: ListNode | undefined;
  len: number = 0;

  First(): ListNode | undefined {
    return this.root;
  }
}

class ListNode {
  prev: ListNode = this;
  next: ListNode = this;
  list: List;
  val: any;

  constructor(list: List, value: any, prev: ListNode, next: ListNode) {
    this.list = list;
  }
}
