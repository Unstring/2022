package Revision.LinkedList;
import java.util.Scanner;
public class mpwj {
    public static int[] arr;
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        arr = new int[n];
        for(int i = 0; i < arr.length; i++){
            arr[i] = scn.nextInt();
        }
        // System.out.println(n);
        // for(int v: arr) System.out.print(v + " ");
        // System.out.println();
        scn.close();
        int res = Mpwj1(0, n);
        System.out.println(res);
    }
    public static int Mpwj(int s, int d){
        if(s == d){
            return 1;
        }
        if(s > d){
            return 0;
        }
        int res = 0;
        for(int i = 1; i <= arr[s]; i++){
            System.out.println("Call for " + (s + 1));
            res += Mpwj(s + i, d);
        }
        return res;
    }

    public static int Mpwj1(int s, int d) {
        if(s == d) {
            return 1;
        }
        int ans=0;
        for(int i = 1 ; i <= arr[s] && s + i <= d;i++) {
            ans = ans + Mpwj1(s + i , d);
        }
        return ans;
    }
}