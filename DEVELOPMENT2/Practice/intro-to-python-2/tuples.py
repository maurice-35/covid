# TUPLES

my_tuple = ("apple", "pear", "mango", "pineapple")

print(len(my_tuple))
print(my_tuple[0])

# can have one item in a tuple, needs a trailing comma
other_tuple = ("puppy",)

# change list into tuple
my_list = ["cat", "dog","fish"]
list_to_tuple = tuple(my_list)
print("mylist", my_list)
print("list to tuple", list_to_tuple)

# change tuple into list
tuple_to_list = list(my_tuple)
print("tuple to list", tuple_to_list)

name = "Mau"         # This separates the characters of the string.
print(list(name))

# same as .includes, for lists and tuples
if "dog" in list_to_tuple:
		print("there is a dog")


		