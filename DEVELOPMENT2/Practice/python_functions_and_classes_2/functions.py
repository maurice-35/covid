# FUNCTION

def say_hello():
		print('Hello')

say_hello()

# using arguments
def customised_greeting(greeting, name):
		print(f"{greeting} {name}")

customised_greeting("hiya", "mau")

def add(a, b):
		""" This function adds 2 numbers together"""
		return a + b

print(add(1, 2))
# print(add.__doc__)

multiply = lambda: "returning values"    # In JS it's () => "returning values"

# arrow function equivalent
multiply = lambda a, b: a * b
print(multiply(2, 5))

# ARGS
def greetings(*instructors):
	print("instructors", instructors)
	for item in instructors:              # Looping
			print(item)

greetings("Char", "Oli", "Sam")      # This gives us a tuple
greetings("Mau", "Nick", "Paul")
greetings("Tim")

def more_greetings(one, two, three):
		print(f"Hello {two}")

more_greetings(two="Sam", three="Oli", one="Char")

# KWARGS    =   Key Words ARGS
def greet(**kwargs):
		print("KWARGS", kwargs.items())
		for greeting in kwargs:
				print(f"{greeting}")        # f = format string

greet(Char="hello", Sam="Hi", Oli="Alright")    


def greet(**kwargs):
		print("KWARGS", kwargs.keys())          # keys to get the keys
		print("KWARGS", kwargs.values())        # values to get the values
		print("KWARGS", kwargs.items()) 				# items to get key value pairs
		for name, greeting in kwargs.items():
				print(f"{greeting} {name}")         # f = format string

greet(Char="hello", Sam="Hi", Oli="Alright")    # This gives us a dict with key-value pairs.


# SCOPE
a = "hello"			  	# This ca be seen as 'let' in JS  i.e reassigning values inside of a function.
b = "Maurice"
def testing_scope():
		global a, b						# make sure when we refer to 'a' inside the function is using 'a' in global scope
		a = "goodbye"
		b = "Arjun"
		print("inside the function", a)

testing_scope()
print("outside the function", a)
print(b)


def solution(a):
	counter = 0
	num = a[0]

	for i in a:
		curr_frequency = a.count(i)
		if(curr_frequency > counter):
			counter = curr_frequency
			num = i
	
		return num
a = [2, 5, 2, 3, 57, 38, 51]
print(solution(b))


from collections import Counter

b = [2, 5, 2, 3, 5, 7, 3, 8, 4, 1]
c = Counter(b)

print(c.most_common(3))


f = [2, 5, 2, 3, 57, 38, 41]
i = int

samebnumber = f.count(5)

print(samebnumber)


import numpy as np

x = np.a([3, 6, 7, 3, 9, 13, 6, 11, 13])
print("original array:")
print(x)

print("Most frequent value in above array")
q = np.bincount(x)
maximum = max(q)

for i in range(len(q)):
		if q[i] == maximum:
				print(i, end=" ")