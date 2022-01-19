package Revision.LinkedList;
import java.util.Scanner;
public class Csmm {
    public static int[] arr;
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        arr = new int[n];
        for(int i = 0; i < arr.length; i++){
            arr[i] = scn.nextInt();
        }
        scn.close();
        int res = csmm(0, n);
        System.out.println(res);
    }
    public static int csmm(int s, int d){
        if(s == d){
            return 0;
        }
        int min = Integer.MAX_VALUE;
        for(int i = 1; i <= arr[s]; i++){
            int moves = csmm(s + i, d);
            if(moves < min) min = moves;
        }
        return min;
    }
}