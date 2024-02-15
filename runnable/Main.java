  import java.util.Scanner;

  public class Main {  

      private static final double PRICE = 234.90;  

      public static void main(String[] args) {  
          int unit;  
          double total_bill;  

          Scanner sc = new Scanner(System.in);  
          unit = sc.nextInt();  
          total_bill = PRICE * unit;  

          // Round the total bill to one decimal place
          total_bill = Math.round(total_bill * 10.0) / 10.0;

          System.out.print("Enter the number of units you have used: "
           + unit);  
          System.out.println(" The total amount you have to deposit is: " +
           total_bill);  
      }  
  }