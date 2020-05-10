console.log('npm run dev');

export default class Graph {

  // defining vertex array and 
  // adjacent list 
  constructor(noOfVertices, graphType = 'u') {
    this.graphType = graphType;
    this.noOfVertices = noOfVertices;
    this.adjVerticesList = new Map(); //  Map<Vertex, List<Vertex>> adjVertices;
  }

  // functions to be implemented 
  // bfs(v) 
  // dfs(v) 

  // add vertex to the graph 
  addVertex(vertex) {
    // initialize the adjacent list with a 
    // null array 
    this.adjVerticesList.set(vertex, []);
  }

  // add edge to the graph 
  addEdge(fromVertex, toVertex) {
    // get the list for vertex v and put the 
    // vertex w denoting edge between v and w 
    this.adjVerticesList.get(fromVertex).push(toVertex);

    // if graph is undirected, 
    // add an edge from w to v also 
    if (this.graphType === 'u') {
      this.adjVerticesList.get(toVertex).push(fromVertex);
    }
  }

  // Prints the vertex and adjacency list 
  printGraph() {
    // get all the vertices 
    var get_keys = this.adjVerticesList.keys();

    // iterate over the vertices 
    for (var i of get_keys) {
      // great the corresponding adjacency list 
      // for the vertex 
      var get_values = this.adjVerticesList.get(i);
      var conc = "";

      // iterate over the adjacency list 
      // concatenate the values into a string 
      for (var j of get_values)
        conc += j + " ";

      // print the vertex and its adjacency list 
      console.log(i + " -> " + conc);
    }
  }

  breadthFirstSearch(){
    
  }
}
