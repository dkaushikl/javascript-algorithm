const accountsMerge = accounts => {
  if (!accounts.length) {
    return [];
  }

  // Create a Map of  Username>
  const emailToNameMap = new Map();
  accounts.forEach(account => {
    const name = account[0];
    for (let i = 1; i < account.length; i++) {
      emailToNameMap.set(account[i], name);
    }
  });

  console.log(emailToNameMap);

  // construct the graph using accounts (items 1..n are emails)
  // add an edge between 1st email (account[1]) with rest of the emails & vice versa
  const graph = new Map();
  accounts.forEach(account => {
    const firstNode = account[1];
    let firstNodeNeighbors = [];
    if (graph.has(firstNode)) {
      firstNodeNeighbors = graph.get(firstNode);
    }
    for (let i = 2; i < account.length; i++) {
      firstNodeNeighbors.push(account[i]);
      let currrentNodeNeighbours = graph.get(account[i]) || [];
      currrentNodeNeighbours.push(firstNode);
      graph.set(account[i], currrentNodeNeighbours);
    }
    graph.set(firstNode, firstNodeNeighbors);
  });
  console.log(graph);

  const result = [];
  const visited = new Set(); // to keep track of visited nodes
  const stack = [];

  graph.forEach((neighbours, email, map) => {
    /* Steps: 
         if we are visiting a node for first time, 
          1. then this would form the first entry of this .
          2. assign newEntry with this user's name and save this email ID in array.
          3. Perform a DFS on this node and find all its connected nodes (emails)
          4. Sort the list of emails (nodes) of this connected component
          5. Add the [name, ] to final result array
        */
    if (!visited.has(email)) {
      visited.add(email);
      stack.push(email);

      let newEntry = [emailToNameMap.get(email)];
      let newEntryEmails = [];

      while (stack.length) {
        const currentNode = stack.pop();
        newEntryEmails.push(currentNode);

        const currentNeighbours = graph.get(currentNode);

        for (let neighbour of currentNeighbours) {
          if (!visited.has(neighbour)) {
            visited.add(neighbour);
            stack.push(neighbour);
          }
        }
      }

      newEntryEmails.sort();
      newEntry = newEntry.concat(newEntryEmails);
      result.push(newEntry);
    }
  });

  return result;
};

let mergeAcc = [
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['Mary', 'mary@mail.com'],
  ['John', 'johnnybravo@mail.com']
];

// console.log(accountsMerge(mergeAcc));
