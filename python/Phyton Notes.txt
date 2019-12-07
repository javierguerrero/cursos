
•:•.•:•.•:•:•:•:•:•:•:•☾Básicos de programación☽•:•.•:•.•:•:•:•:•:•:•:•

Para ingresar a la "interactive shell" 
>>> python


----------------------
[Python 2 vs Python 3]
----------------------
- Usar Python 3. Tiene mejoras

print('hello')
exit()

----------------------------------
[Operadores matemáticos en Python]
----------------------------------
>>> 2 + 2
>>> 5 - 2
>>> 3 * 4
>>> 5 / 4
>>> 5.0 / 4.0
>>> 9 % 2 --> el resultado es lo que sobra después de una división
>>> 3**2 --> 3 al cuadrado
>>> 3 > 5
>>> 5 < 10
>>> 10 == 10

--------------------------
[Tipos de datos en Python]
--------------------------

Orden de operaciones: usar acrónimo PEMDAS 
	parántesis
	exponentes
	multiplicación / división
	adición / sustracción
	
tipos básicos: integer, float, string, boolean

funciona que retorna tipo de dato 
>>> type(2)
>>> type(3.0)
>>> type('platzi')
>>> type(False)
>>> type(3 == 5)


Los operadores dependen del contexto
>>> 'hola' + 'hola' --> 'holahola'
>>> 'hola' + 5 --> error
>>> 'curso' * 3 --> 'cursocursocurso'
>>> 'curso' / 3 --> error


----------------------------------
[Declarar variables y expresiones]
----------------------------------

consola interactiva (para experimentos rápidos)
>>> pi = 3.14159
>>> radio = 3
>>> area = pi * radio**2
>>> print(area)
>>> radio = 5
>>> area = pi * radio**2
>>> print(area)


Para guardar nuestros programas: modo script
Para ejecutar un programa guardo en un archivo:
- vamos a la carpeta donde esta guardado el archivo
- abrimos la consola
>>> python saludos.py

Python 2.x es malo reconociendo caracteres especiales. Para resolver esto usar la siguiente instrucción:
# -*- coding: utf-8 -*-


------------------------------
[Definir funciones con Python]
------------------------------












•:•.•:•.•:•:•:•:•:•:•:•☾Uso de strings y ciclos☽•:•.•:•.•:•:•:•:•:•:•:•

