# FLAMES [Game](http://vinitshahdeo.com/projects/flames/)

> F.L.A.M.E.S is a fun game to find out the status of relationship. Entering two names will give you the outcome of a relationship between them.

> View [Live Demo](http://vinitshahdeo.com/projects/flames/)

## API

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
