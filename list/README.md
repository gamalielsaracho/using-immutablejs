# Create a populated List of Data.

## List() vs List.of()

1. List.of():

> You will use when need creating a List from non-iterable data.
> Examples: function arguments, a javascript object, or a string that you want interpreted as a whole string.

2. List():

> You will use when need creating a List from iterable data.
> Examples: an array, or an immutable iterable object (List, Map, Set, ect..), or a string that you want interpreted as a series of changes.


## A javascript string is an iterable object. if you create a List of strings List('string'), this will return a List of characters ['s', 't', 'r', 'i', 'n', 'g'].

## And if you want make a string non-iterable you can use List.of('string').

