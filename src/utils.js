class FriendGraph {
    #friends = [];
    #connection = [];
  
    constructor(friends, connection) {
      this.#friends = friends;
      this.#connection = connection;
    }
  
    getAdjacencyList() {
      return this.#connection.reduce((prev, cur) => {
        const { source, target } = cur;
        if (prev.has(source)) {
          prev.get(source).push(target);
        } else {
          prev.set(source, [target]);
        }
        return prev;
      }, new Map());
    }
  
    getFriendConnectionLevel(name1, name2) {
      const friendsAdjacencyList = this.getAdjacencyList();
  
      const visitedFriends = new Set();
      const levelArr = [];
  
      const findConnection = (name, prevLevel) => {
        if (visitedFriends.has(name)) return;
        if (name === name2) {
          levelArr.push(prevLevel);
          return;
        }
        const nameConnections = friendsAdjacencyList.get(name);
        visitedFriends.add(name);
  
        nameConnections.forEach((each) => {
          if(!visitedFriends.has(each)){
              findConnection(each, `${prevLevel} > ${each}`);
              visitedFriends.delete(each);
          }
         
        });
      };
  
      findConnection(name1, name1);
      return levelArr;
    }
  }

export default FriendGraph;