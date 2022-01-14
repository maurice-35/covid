# LOOPS

my_list = ["dog", "puppy", "cat", "kitten"]

# for loop
for item in my_list:
		print(item)

print("loop has finished")

# MAP
numbers = [1, 5, 18, 27, 52]

doubled_numbers = list(map(lambda num: num * 2, numbers))      # doubledNumbers = array.map((num) => num * 2)     * JS method  lambda is a funnction such as '() =>'
print('doubled numbers', doubled_numbers)

# map as list comprehension
more_numbers = [num * 2 for num in numbers]
print('more numbers', more_numbers)

# FILTER
even_numbers = list(filter(lambda num: num % 2 == 0, numbers))
print('even number', even_numbers)

odd_numbers = list(filter(lambda num: num % 2 == 1, numbers))
print('odd numbers', odd_numbers)

# filetr as list comprehension
more_evens = [num for num in numbers if num % 2 == 0]   # Here we can do map filter and map together 

# FILTER & MAP
evens_and_multiply = [num * 2 for num in numbers if num % 2 == 0]
print('even and multiply', evens_and_multiply)

