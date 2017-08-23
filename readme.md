### Blog App
A Simple Blog server.

### Prerequisite
- MongoDB

### Depndencies
```
npm install
```
### Run Server
```
node server.js
```

### API

#### 1. Create a blog post

##### Request
```
Request URL: /api/posts
Method: POST
Body:
{
	"title": "First blog",
	"text": "My First Blog\n\nIt is awesome.\n\nI like it."
}

```
##### Response
```
{
    "_id": "599d212fa69dd4742dda0cc7",
    "text": [
        {
            "_id": "599d212fa69dd4742dda0cca",
            "content": "My First Blog"
        },
        {
            "_id": "599d212fa69dd4742dda0cc9",
            "content": "It is awesome."
        },
        {
            "_id": "599d212fa69dd4742dda0cc8",
            "content": "I like it."
        }
    ],
    "title": "First blog",
    "created": "2017-08-23T06:31:11.868Z"
}
```

**Explanation:**
I have divided blog text into a dict where paragraph has ID. So I can load the comments on that paragraph.

#### 2. Get a Blog post

##### Request
```
Request URL: /api/post/:postid
Example: /api/post/599d212fa69dd4742dda0cc7
Method: GET

```
##### Response
```
[
    {
        "_id": "599d212fa69dd4742dda0cc7",
        "text": [
            {
                "_id": "599d212fa69dd4742dda0cca",
                "content": "My First Blog"
            },
            {
                "_id": "599d212fa69dd4742dda0cc9",
                "content": "It is awesome."
            },
            {
                "_id": "599d212fa69dd4742dda0cc8",
                "content": "I like it."
            }
        ],
        "title": "First blog",
        "created": "2017-08-23T06:31:11.868Z"
    }
]
```

#### 3. List of Posts

##### Request
```
Request URL: /api/posts
Method: GET

```
##### Response
```
[
    {
        "_id": "599d212fa69dd4742dda0cc7",
        "text": [
            {
                "_id": "599d212fa69dd4742dda0cca",
                "content": "My First Blog"
            },
            {
                "_id": "599d212fa69dd4742dda0cc9",
                "content": "It is awesome."
            },
            {
                "_id": "599d212fa69dd4742dda0cc8",
                "content": "I like it."
            }
        ],
        "title": "First blog",
        "created": "2017-08-23T06:31:11.868Z"
    }
    ...
    ...
    4 Mote Posts
    ...
    ...
]
```
**Explanation:**
As requirement, API is returning only first 5 posts.

#### 4. Pagination for Posts

##### Request
```
Request URL: /api/posts/:pageNumber
Example: /api/posts/2
Method: GET

```
**Explanation:**
As requirement, API is returning only first 5 posts. Pass page number to get post according to page. Eg. for page 2, give 2.

#### 5. Create a comment

##### Request
```
Request URL: /api/comment
Method: POST
Body: {
	"paragraphId": "599d212fa69dd4742dda0cca",
	"content": "I am a comment."
}

```
##### Response
```
{
    "paragraphId": "599d212fa69dd4742dda0cca",
    "_id": "599d2574a69dd4742dda0ccc",
    "content": "I am a comment.",
    "created": "2017-08-23T06:49:24.665Z"
}
```

#### 6. Get All comments of a paragraph

##### Request
```
Request URL: /api/comment/:paragraphId
Example: /api/comment/599d212fa69dd4742dda0cca
Method: GET

```
##### Response as a list of comments
```
[
    {
        "_id": "599d2574a69dd4742dda0ccc",
        "paragraphId": "599d212fa69dd4742dda0cca",
        "content": "I am a comment.",
        "created": "2017-08-23T06:49:24.665Z"
    }
]
```
