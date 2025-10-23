export default function removeKFromList(l, k) {
  // Create a dummy node that points to the head
  const dummy = { value: 0, next: l };
  let current = dummy;

  while (current.next) {
    if (current.next.value === k) {
      // Remove the node by skipping it
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return dummy.next;
}