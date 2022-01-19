package Revision.LinkedList;
import java.util.Scanner;
public class mpwj {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = scn.nextInt();
        }
        int res = mazePath(n, arr);
        scn.close();
        System.out.println(res);
    }
    public static int mazePath(int n, int[] arr){
        if(n == 0){
            return 1;
        }
        if(n < 0){
            return 0;
        }
        int res = 0;
        for(int i = 1; i <= arr[i] && i + arr[i] <= n; i++){
            res += mazePath(n - i, arr);
        }
        return res;
    }
}