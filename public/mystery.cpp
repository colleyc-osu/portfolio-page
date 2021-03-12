/* FizzBuzz but Chug Jug */
/* Casey Colley */

#include <iostream>

using namespace std;

int main() {

	for (int i = 1; i < 101; i++) {
		if (i % 15 == 0) {
			cout << "ChugJug";
		}
		else if (i % 3 == 0) {
			cout << "Chug";
		}
		else if (i % 5 == 0) {
			cout << "Jug";
		}
		else {
			cout << i;
		}

		if (i != 100) {
			cout << "\t";
		}
	}

	return 0;
}
