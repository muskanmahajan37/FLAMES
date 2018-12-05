# FLAMES [Game](http://vinitshahdeo.com/projects/flames/)

> **F.L.A.M.E.S** is a fun game to find out the status of relationship. Entering two names will give you the outcome of a relationship between them.

[![Flames Game](https://img.shields.io/badge/Flames-Calculator-teal.svg)](http://vinitshahdeo.com/projects/flames/) [![Fun Game](https://img.shields.io/badge/Fun-Game-orange.svg)](http://vinitshahdeo.com/projects/flames/)

> **View [Live Demo](http://vinitshahdeo.com/projects/flames/)**

**Flames** Game is a relationship calculating algorithm famous between the youngsters. So what FLAMES stance for?

- **F** - **`Friend`**
- **L** - **`Love`**
- **A** - **`Affection`**
- **M** - **`Marriage`**
- **E** - **`Enemy`**
- **S** - **`Sister`**

## API

[![Flames API](https://img.shields.io/badge/Flames-API-dodgerblue.svg)](http://vinitshahdeo.com/flames.php/) [![Fun](https://img.shields.io/badge/Just--For-Fun-crimson.svg)](http://vinitshahdeo.com/flames.php/)

I've built this API for fun. Anyone is welcome to use it!

#### Request

```js
GET http://vinitshahdeo.com/flames.php?name1=Vinit&name2=Sherry
```
#### Response

```js
{
  "status": 200,
  "status_message": "Flames Calculated Successfully!",
  "relationship": "Friend"
}
```

## Examples

#### This is **jQuery** Example

```js
$.ajax({
    url: 'http://vinitshahdeo.com/flames.php?name1=Vinit&name2=Sherry',
    type: 'GET',
    success: function(data) {
        console.log(data);
    },
    error: function(data) {
        console.log(data);
    }
});
```

### Author

**[Vinit Shahdeo](http://www.vinitshahdeo.com/)**

[![GitHub license](https://img.shields.io/github/license/vinitshahdeo/FLAMES.svg?style=social)](https://github.com/vinitshahdeo/FLAMES/blob/master/LICENSE) [![Twitter](https://img.shields.io/twitter/url/https/github.com/vinitshahdeo/FLAMES.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fvinitshahdeo%2FFLAMES)