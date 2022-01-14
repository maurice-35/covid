# DICTS      are just like JS objects

person = {
	"name": "Mau",
	"age": 40,
	"location": "London"
}

print(person)
print(len(person))
print(person["name"])
print(person.get("name"))        # In JS it's 'person.name'

my_name = "name"        # here we pass the key to the value.
print(person[my_name])

# add an item
person["hobbies"] = "Cycling"
print(person)

# change an item
person["name"] = "Paul"
print(person)

person.update({"location": "In-doors"})

# remove an item
person.pop("age")
print(person)

# get keys
print(person.keys())

# get values
print(person.values())

# loop through dictionary

for item in person:
		print(person[item])

# make a copy
dict_copy = person.copy()
# empty the dictionary
dict_copy.clear()
print('copy', dict_copy)
