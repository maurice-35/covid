# CLASSES

class Person:
		def __init__(self, name, age):						#	'self' in JS id 'this'
					self.name = name
					self.age = age

		def say_hello(self):
				print(f"Hi, my name is {self.name}")
			
		def decrease_age(self, amount):
				self.age -= amount

person_one = Person("Maurice", 40)

# print(vars(person_one))
# print(person_one.name)
# person_one.say_hello()
person_one.decrease_age(2)
print(vars(person_one))


# extending / inheriting a class
class Employee(Person):                # you can comma separate to inherit two classes.
		def __init__(self, name, age, salary, role):
				self.salary = salary
				self.role = role

				Person.__init__(self, name , age)

		def introduce(self):
				return f"I am {self.name}, I earn {self.salary} as a {self.role}"

person_two = Employee("Tom", 29, "30k", "junior dev")
print(vars(person_two))
print(person_two.introduce())


class Movie:
		def __init__(self, title, duration, released_year, author):
				self.title = title
				self.duration = duration
				self.released_year = released_year
				self.author = author

film_one = Movie("The Future", "120mins", 2021, "Maurice")
print(vars(film_one))


class Employer(Person, Movie):
		def __init__(self, name, age, title, duration, released_year, author, company, CEO, location):
				self.company = company
				self.CEO = CEO
				self.location = location

				Person. __init__(self, name, age)
				Movie. __init__(self, title, duration, released_year, author)

person_three = Employer("Tom", 29, "The Future", "120mins", 2021, "Maurice", "M & Sons", "MKT", "London")
print(vars(person_three))

