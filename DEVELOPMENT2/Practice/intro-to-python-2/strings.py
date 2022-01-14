# strings

my_string = "this is a string"

print('my string ->', my_string)

# multiline string
other_string = """ 
Hello
This will keep its formatting
""" 
print(other_string)

# string concatenation
name = "Mau"

concat_string = "My name is " + name
print('concat string ->', concat_string)

age = 40
string_with_numbers = "My name is " + name + " I am " + str(age) + " years old"
print(string_with_numbers)

# frmatted string
formatted_string = f"My name is {name}, I am {age} years old"
print(formatted_string)

# getting the type

print(type(name))
print(type(age))
print(type(30.5))