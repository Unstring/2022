package Revision.LinkedList;

import java.util.Scanner;

public class addLast {
    public static class Node {
        int data;
        Node next;
    }
    public static class LinkedList{
        int size;
        Node head;
        Node tail;
        void addLast(int val){
            Node node = new Node();
            node.data = val;
            node.next = null;
            
            if(size == 0){
                head = tail = node;
            }else{
                tail.next = node;
                tail = node;
            }
            size++;
        }
        public int size(){
            return size;
        }
        public void display(){
            Node temp = head;
            while(temp != null){
                System.out.print(temp.data + " ");
                temp = temp.next;
            }
            System.out.println();
        }

        public void removeFirst(){
            if(size == 0){
                System.out.println("List is emplty");
            }else if(size == 1){
                head = tail = null;
                size = 0;
            }else{
                head = head.next;
                size--;
            }
        }
    }
    public static void testList(LinkedList list){
        for(Node temp = list.head; temp != null; temp = temp.next){
            System.out.println(temp.data);
        }
        System.out.println(list.size);
        if(list.size > 0){
            System.out.println(list.tail.data);
        }
    }
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        LinkedList list = new LinkedList();
        String str = scn.nextLine();
        while(str.equals("quit") == false){
            if(str.startsWith("addLast")){
                int val = Integer.parseInt(str.split(" ")[1]);
                list.addLast(val);
            }
            str = scn.nextLine();
        }
        testList(list);
        scn.close();
    }
}