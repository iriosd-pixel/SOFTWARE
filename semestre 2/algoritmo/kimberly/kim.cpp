#include "iostream"
#include "cotdlib"
using namespace std;
class animales {
    private
    string nombre;
    string color;
public
animales(string n, string c) {
        nombre = n;
        color = c;
    }
    void mostrarInfo() {
        cout << "Nombre: " << nombre << ", Color: " << color << endl;
    }
};
