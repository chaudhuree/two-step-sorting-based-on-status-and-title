let data = [
  { id:1 , title: "writing", status: "pending" },
  { id:2 , title: "drawing", status: "active" },
  { id:3 , title: "reading", status: "done" },
  { id:4 , title: "cooking", status: "active" },
  { id:5 , title: "playing", status: "pending" },
  { id:6 , title: "designing", status: "done" },
  { id:7 , title: "learning", status: "active" },
  { id:8 , title: "coding", status: "done" },
  { id:9 , title: "singing", status: "pending" },
  { id:10 , title: "exercising", status: "active" },
  { id:11 , title: "gardening", status: "done" },
];

// Define the custom sorting function
function customSort(a, b) {
  // First, compare status (active, pending, done)
  const statusOrder = { active: 1, pending: 2, done: 3 };
  const statusComparison = statusOrder[a.status] - statusOrder[b.status];

  // If status is the same, then compare by title
  if (statusComparison === 0) {
    return a.title.localeCompare(b.title);
  }

  return statusComparison;
}

// Apply the custom sort function to the array
data.sort(customSort);

console.log(data);
