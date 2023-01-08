class FriendGraph{
    #friends=[]
    #connection=[]

    constructor(friends,connection){
        this.#friends = friends;
        this.#connection = connection;
    }

    

    getLinkedList(){
        return this.#connection.reduce((prev,cur)=>{
            const {source,target} = cur;
            if(prev.has(source)){
                prev.get(source).push(target);
            }else{
                prev.set(source,[target])
            }
            return prev;
        },new Map())
    }

    getFriendConnectionLevel(){
        
    }
}

export default FriendGraph;