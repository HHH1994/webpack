import {A, B} from "./dep2";

export const A1 = class A1 extends A {
	render() {return new C();}
};

class B1 extends B {
	render() {return new D();}
}

export class C {}
class D {
	foo() {
		class B2 extends B {}

		return B2;
	}
}
