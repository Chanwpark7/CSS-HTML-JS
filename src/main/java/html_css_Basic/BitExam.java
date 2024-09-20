package html_css_Basic;

public class BitExam {

	public static void main(String[] args) {
		System.out.println("Hello World");
		System.out.println(Integer.toBinaryString(10>>5));
		System.out.println(10<<4);
		
		System.out.println(Integer.toBinaryString(~-1));
		System.out.println("11111111111111111111111111111111".length());
		
		//부호비트까지 같이 3비트 우측으로 옮기라는 의미
		System.out.println(Integer.toBinaryString(-1>>>3));
		System.out.println("11111111111111111111111111111".length());
		System.out.println(-1>>>3);
		
		System.out.println(4&14);
		System.out.println(4|14);
	}

}
