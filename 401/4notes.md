pip install pytest-watch



"small steps to keep your balance"

## Formatting Strings

1. **`.format()` method:**
   - Purpose: Introduced in Python 2.7 and widely used in Python 3, the `.format()` method provides a flexible way to format strings by replacing placeholders with specified values.
   - Example:
     ```python
     name = "Alice"
     age = 30
     message = "Hello, my name is {} and I am {} years old.".format(name, age)
     print(message)
     ```

2. **`%` formatting (old-style formatting):**
   - Purpose: This is the older formatting style inherited from C's `printf` function. It is still valid but has been largely superseded by the `.format()` method and f-strings.
   - Example:
     ```python
     name = "Bob"
     age = 25
     message = "Hello, my name is %s and I am %d years old." % (name, age)
     print(message)
     ```

3. **f-strings (formatted string literals):**
   - Purpose: Introduced in Python 3.6, f-strings provide a concise and readable way to embed expressions inside string literals. They are considered the most modern and preferred way of string formatting.
   - Example:
     ```python
     name = "Charlie"
     age = 22
     message = f"Hello, my name is {name} and I am {age} years old."
     print(message)
     ```

4. **Asterisks (`*`) operator for unpacking:**
   - Purpose: The `*` operator is used for iterable unpacking. It allows you to pass the elements of an iterable (like a list or tuple) as arguments to a function or elements in a sequence.
   - Example:
     ```python
     values = (3, 5, 7)
     result = "Values: {} {} {}".format(*values)
     print(result)
     ```

In this example, the `*values` syntax unpacks the elements of the `values` tuple and passes them as separate arguments to the `.format()` method. The result will be `"Values: 3 5 7"`.

In summary, while `.format()` and `%` formatting are older methods that are still valid, f-strings are generally recommended for their readability and concise syntax. The `*` operator is not directly related to string formatting but is commonly used in conjunction with these methods for iterable unpacking.

## Fixtures

1. Comment them out. They are not needed for this exercise - in lab 4.
2. In `pytest`, a fixture is a function marked with the `@pytest.fixture` decorator. Fixtures provide a way to set up and share resources or setup code across multiple tests in a flexible and modular way. They help in maintaining a clean and organized structure for your tests.

Here's a simple example to illustrate the use of fixtures in `pytest`:

```python
import pytest

# Fixture setup code - runs before each test function that uses it
@pytest.fixture
def example_data():
    data = [1, 2, 3, 4, 5]
    return data

# Test function that uses the fixture
def test_sum_example_data(example_data):
    result = sum(example_data)
    assert result == 15

# Another test function using the same fixture
def test_length_example_data(example_data):
    assert len(example_data) == 5
```

In this example:
- The `example_data` fixture is a function marked with `@pytest.fixture`. It provides a list of data `[1, 2, 3, 4, 5]`.
- The `test_sum_example_data` function uses the `example_data` fixture as an argument. The fixture is automatically called, and its return value (the list) is passed to the test function.
- The `test_length_example_data` function also uses the same `example_data` fixture.

Fixtures can also be used for more complex setups, such as setting up databases, creating temporary files, or establishing network connections. You can also use fixtures to control the scope of setup and teardown, such as function-level, module-level, class-level, or session-level fixtures.

Here's an example with a function-scoped fixture:

```python
import pytest

# Function-scoped fixture setup code - runs before and after each test function that uses it
@pytest.fixture(scope="function")
def example_data():
    data = [1, 2, 3, 4, 5]
    print("Fixture setup")
    yield data  # The yield statement is used for teardown code
    print("Fixture teardown")

# Test function that uses the fixture
def test_sum_example_data(example_data):
    result = sum(example_data)
    assert result == 15
```

In this case, the `example_data` fixture setup code will run before the `test_sum_example_data` test, and the teardown code will run afterward. The `yield` statement indicates where the teardown code should be executed.

## Classes in Python

In Python, a class is a blueprint or a template for creating objects. It defines a set of attributes and methods that the objects created from the class will have. Objects are instances of a class, and each object can have its own unique attributes and behavior, but they share the structure and behavior defined by the class.

Here's a basic example of a class in Python:

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.make} {self.model}")

# Creating an instance (object) of the Car class
my_car = Car("Toyota", "Camry", 2022)

# Accessing attributes and calling a method of the instance
print(my_car.make)  # Output: Toyota
my_car.display_info()  # Output: 2022 Toyota Camry
```

In this example:
- `Car` is a class that has attributes (`make`, `model`, and `year`) and a method (`display_info`).
- `my_car` is an instance of the `Car` class, created with specific values for its attributes.
- The `display_info` method is a behavior associated with instances of the `Car` class.

Key concepts related to classes:

1. **Class:** A blueprint or template that defines the attributes and methods common to all instances created from it.

2. **Instance:** An individual object created from a class. Each instance has its own set of attributes and can execute methods defined in the class.

3. **Attributes:** Variables that store data within a class. They represent the characteristics or properties of an object.

4. **Methods:** Functions that are associated with a class and can be called on instances of that class. They define the behavior of the objects.

In summary, classes provide a way to structure and organize code by grouping data (attributes) and behavior (methods) into a single unit. Instances are individual objects created from a class, each having its own unique state and behavior.


### Decorator

A decorator in Python is a design pattern that allows you to extend or modify the behavior of functions or methods without modifying their actual code. It involves wrapping a function or method with another function to add additional functionality.

In the provided code, there isn't an explicit use of decorators, but I can explain where you might commonly find them and how they work.

Here's a brief example of a simple decorator:

```python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# Equivalent to say_hello = my_decorator(say_hello)
```

In this example, `my_decorator` is a decorator function that takes another function (`func`) as an argument, and it returns a new function (`wrapper`) that adds behavior before and after calling the original function. The `@my_decorator` syntax is a shorthand for applying the decorator to the `say_hello` function.

Now, regarding the question of why decorators can't be used with instances directly:

Decorators are typically applied to functions or methods, not to instances. This is because decorators are designed to modify the behavior of functions, and instances are objects created from classes. However, you can apply decorators to class methods, which are functions associated with a class.

 For example, you might create a decorator to log information before and after a method is called, and then apply it to specific methods within your classes.

Here's a simple example of a class method decorated:

```python
def log_method(func):
    def wrapper(self, *args, **kwargs):
        print(f"Calling {func.__name__} with arguments {args} and keyword arguments {kwargs}")
        result = func(self, *args, **kwargs)
        print(f"{func.__name__} finished with result: {result}")
        return result
    return wrapper

class MyClass:
    @log_method
    def my_method(self, x, y):
        return x + y
```

In this example, the `log_method` decorator is applied to the `my_method` of the `MyClass`. When `my_method` is called, it will log information before and after its execution.

Remember that decorators are commonly used with functions and methods, and they enhance the functionality of those functions/methods. They provide a clean and modular way to extend or modify behavior without directly altering the original code.