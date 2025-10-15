package random;

public class Debugger {
	private double a, b, c;
	
	public Debugger(double a, double b, double c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	public double getA() {
		return a;
	}

	public void setA(double a) {
		this.a = a;
	}

	public double getB() {
		return b;
	}

	public void setB(double b) {
		this.b = b;
	}

	public double getC() {
		return c;
	}

	public void setC(double c) {
		this.c = c;
	}
	
	public double getDelta() {
		return b*b - 4*a*c;
	}
	
	 public double getX1() {
		 return (-b - Math.sqrt(getDelta()) / (2*a));
	 }
	 
	 public double getX2() {
		 return (-b + Math.sqrt(getDelta()) / (2*a));
	 }
	 
	 public static void main(String[] args) {
		Debugger equacao = new Debugger(1, -5, 6);
		
		System.out.println(
			    "ENTRADA: " 
			    + equacao.getA() + "x² " 
			    + (equacao.getB() >= 0 ? "+ " : "") + equacao.getB() + "x " 
			    + (equacao.getC() >= 0 ? "+ " : "") + equacao.getC() 
			    + " = 0"
			);

			System.out.println(
			    "SAÍDA:  x₁ = " + equacao.getX1() 
			    + "   x₂ = " + equacao.getX2()
			);
	}
}
