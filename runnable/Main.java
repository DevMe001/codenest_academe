  import java.util.Scanner;
  public class Main
  {
    public static void main(String[] args)
    {
      Scanner input = new Scanner(System.in);
      String str;
      short short_val = 0;
   
     
      short_val = input.nextShort();

      System.out.print("Enter the Short Value : " + short_val);
   
      //Convert short integer to string
      str = Short.toString(short_val);
      System.out.println("String Value : " + str);
    }
  }
  
    