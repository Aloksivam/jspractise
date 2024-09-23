import java.util.Scanner;
public class Test{
    public static void main(String [] args){
        System.out.println("hello");

        // datatypes
        byte b = 11;
        short n = 12;
        int a = 12;
        // int b = -5;
        float f = 25.6f;
        double t = 12.3d;
        boolean bt = true;
        long l = 12L;

        System.out.println(f+t);
        Scanner sc = new Scanner(System.in);
        int nr = sc.nextInt();
        float ft = sc.nextFloat();
        double dl = sc.nextDouble();
        System.out.println("you have entered:" +nr);
    }
}