# **web development**
### *Front-End technology*
    - HTML
    - CSS
    - JS
### *Back-End technology*
    - JAVA
    - PHP
    - PYTHON
 -------------
## HTML 
html
    : HyperText Markup Language
#### Advantages 
+ In **html** we have default codes and its simple to create web-application
+ it can easily interact with CSS, Angular, Js

` <!doc type html>` is used to make browser understand the version of *html* is used

##### Semantic elements 
header,section, article footer 
##### Block level elements 
h1 to h6, p 
##### Inline elements  
span, img, input
> **attribute** content in an opening tag of element
#### Icon website
- [flaticon](https://www.flaticon.com/)
- [fontawesome](https://fontawesome.com/)


**Website to check color contrast** [webaim](https://webaim.org/resources/contrastchecker/)
#### SVG Img websites
- [freesvg](https://freesvg.org/)

`./` is used to link the files with in the present directory

--------------

--------------


## css 
: Cascading Style Sheets
css is used for 
- font
- color
- spacing
- layout


types of css
- inline
- internal
- external


*inline css* - is done within the element using style attribute
*internal css* - is done within the head element using style tag
*external css* - is done using an external css file which is connected to the html file using link

syntax for internal and external css

```css
selector {
	css-property : value;
}

```


when two or more types of css applied on same selector then following css is applied in the following order  >  inline >internal > external

#### types of selectors 
- tag/element
- class
- id
- universal

###### tag/element selector 
tags like h1 , p , img are directly used as selectors in css
to apply same css to two or more tags we can simple group the tags
 using ","


###### class selector 
css can also be applied by taking class of an element as select
a class can access css using .class_name
when two class are used for a tag last mentioned class is taken into consideration


###### id selector

a id can access css using "#id_name"


###### universal selector 
universal selector is * it used to apply css to each and every element in html 

responsive - webdesign

responsiveness of a web-page can be acheived using

- viewport 
- flexbox
- media-queries


## readJS

+ It is a Library
+ It support JSX (Javascript and XML)
+ component based architecture
    + functional components
    + Class components (statefull)
    + pure components
    + Higher order Components
+ Oneway databinding
+ Single Page Applications
+ Virtual DOM



#### react Environment setup

+ Install webpack --- margin bundle 
++ &babel packages --- to handle runtime errors

+ 'create-react-app'
    + npm install create-react-app
        + create-react-app appname
    + npx create-react-app appname ()
