import java.util.*;

public class graph {

    public static class Edge {
        int src;
        int nbr;
        int wt;

        Edge(int src, int nbr, int wt) {
            this.src = src;
            this.nbr = nbr;
            this.wt = wt;
        }
    }

    public static ArrayList<Edge>[] graph;

    public static void addEdge(int src, int nbr, int wt) {
        graph[src].add(new Edge(src, nbr, wt));
        graph[nbr].add(new Edge(nbr, src, wt));
    }

    private static void display() {
        for(int v = 0; v < graph.length; v++) {
            System.out.print("[" + v + "] -> ");
            for(Edge e : graph[v]) {
                System.out.print("[" + e.src + "-" + e.nbr + "@" + e.wt + "], ");
            }
            System.out.println(".");
        }
    }

    private static void fun() {
        int n = 7;
        graph = new ArrayList[n];
        for(int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }

        addEdge(0, 1, 10);
        addEdge(0, 3, 40);
        addEdge(1, 2, 10);
        addEdge(2, 3, 10);
        addEdge(3, 4, 2);
        addEdge(4, 5, 3);
        addEdge(5, 6, 3);
        addEdge(4, 6, 8);
        
        display();
    }

    public static void gun(){
        int src = 0;
        int dest = 6;
        boolean hp = hasPath(src, dest);
        System.out.println(hp);
    }

    public static boolean hasPath(int src, int dest){
        if(src == dest){
            return true;
        }

        for(int i = 0; i < graph.length; i++){
            for(Edge e : graph[i]){
                if(hasPath(e.nbr, dest)){
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        fun();
        gun();
    }
}