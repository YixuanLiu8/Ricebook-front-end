import { Reducer } from './reducers';
import { changeStatus,
         getUsers,
         getPosts,
         updateUsers,
         updateHeadline,
         updateFollower,
         addFollower,
         removeFollower,
         NewPost,
         newUser,
         updatePost,} from './actions';
test('test initial', () => {
    let newState = Reducer(undefined, {type: "UNDEFINED"})
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name: "",
            email: "",
            phone: "",
            dob: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followedUser: []
    })
})
test('test fetching user', () => {
    let users = [
        {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    expect(newState).toEqual({
        users: [
            {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name: "",
            email: "",
            phone: "",
            dob: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followedUser: []
    })
})
test('test loading post', () => {
    let posts = [
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    ]
    let newState = Reducer(undefined, getPosts(posts))
    expect(newState).toEqual({
        users: [],
        posts: [
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
            "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
        ],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name: "",
            email: "",
            phone: "",
            dob: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followedUser: []
    })
})
test('test login and logout state', () => {
    let newState = Reducer(undefined, changeStatus())
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: true,
        userInfo: {
            name: "",
            email: "",
            phone: "",
            dob: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followedUser: []
    })
    newState = Reducer(newState, changeStatus())
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name: "",
            email: "",
            phone: "",
            dob: "",
            zipcode: "",
            password: "",
            headline: "",
            followed: []
        },
        followedUser: []
    })
})
test('test update initial', () => {
    // init user
    let user = {
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateUsers(user))
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update name', () => {
    // init user
    let user = {
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateUsers(user))
    newState = Reducer(newState, updateUsers({name: 'Test'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Test",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update password', () => {
    // init user
    let user = {
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateUsers(user))
    newState = Reducer(newState, updateUsers({password: '1234'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"1234",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update email', () => {
    // init user
    let user = {
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateUsers(user))
    newState = Reducer(newState, updateUsers({email: '123@123.com'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"123@123.com",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update phone', () => {
    // init user
    let user = {
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateUsers(user))
    newState = Reducer(newState, updateUsers({phone: '123-345-5678'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"123-345-5678",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update dob', () => {
    // init user
    let user = {
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateUsers(user))
    newState = Reducer(undefined, updateUsers({dob: '1234-12-01'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1234-12-01",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update headline', () => {
    // init user
    let user = {
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateUsers(user))
    newState = Reducer(undefined, updateUsers({headline: "new headline"}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"new headline",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update zipcode', () => {
    // init user
    let user = {
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let newState = Reducer(undefined, updateUsers(user))
    newState = Reducer(newState, updateUsers({zipcode: '12345'}))
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"12345",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test add new user', () => {
    // init user
    let user = {
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }
    let users = [
        {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    newState = Reducer(newState, newUser(user))
    expect(newState).toEqual({
        users: [
            {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
            {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        ],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"12345",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update follower', () => {
    // init user
    let user = [{
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",
        followed:["Antonette","Samantha","Karianne"]
    }]
    let users = [
        {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    newState = Reducer(newState, updateFollower(user))
    expect(newState).toEqual({
        users: [
            {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"12345",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: [{
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        }]
    })
})
test('test add follower', () => {
    // init user
    let user = {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]}
    let users = [
        {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    newState = Reducer(newState, addFollower(user))
    expect(newState).toEqual({
        users: [
            {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"12345",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: [{
            name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]
        }]
    })
})
test('test remove follower', () => {
    // init user
    let user = "Bret";
    let users = [
        {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let posts = [{
        name: "Bret" ,
        time: (new Date()).toLocaleString(),
        img: `5.jpg`,
        content: "post content1",
        key: "key1"
    },
        {
            name: "accountname2" ,
            time: (new Date()).toLocaleString(),
            img: `5.jpg`,
            content: "post content2",
            key: "key2"
        }]
    let newState = Reducer(undefined, getUsers(users));
    newState = Reducer(newState, updatePost(posts));
    newState = Reducer(newState, addFollower({name: 'Bret'}));
    newState = Reducer(newState, removeFollower(user));
    expect(newState).toEqual({
        users: [
            {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
            {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        currentPost: [{
            name: "accountname2" ,
            time: (new Date()).toLocaleString(),
            img: `5.jpg`,
            content: "post content2",
            key: "key2"
        }],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"12345",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test add post', () => {
    let post = {
        name: "accountname" ,
        time: (new Date()).toLocaleString(),
        img: `https://picsum.photos/id/1/200/200`,
        content: "post content",
        key: "key"
    }
    let newState = Reducer(undefined, NewPost(post))
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: [post],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"12345",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update user headline', () => {
    let users = [
        {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
    ]
    let newState = Reducer(undefined, getUsers(users))
    let newHeadline = 'test'
    newState = Reducer(newState, updateHeadline(newHeadline));
    expect(newState).toEqual({
        users: [
            {name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"test",zipcode:"12345",followed:["Antonette","Samantha","Karianne"]},
            {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
            {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
            {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        ],
        posts: [],
        currentPost: [],
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"test",
            zipcode:"12345",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
test('test update posts', () => {
    let posts = [{
        name: "accountname1" ,
        time: (new Date()).toLocaleString(),
        img: `5.jpg`,
        content: "post content1",
        key: "key1"
    },
        {
            name: "accountname2" ,
            time: (new Date()).toLocaleString(),
            img: `5.jpg`,
            content: "post content2",
            key: "key2"
        }]
    let newState = Reducer(undefined, updatePost(posts));
    expect(newState).toEqual({
        users: [],
        posts: [],
        currentPost: posts,
        isLogin: false,
        userInfo: {
            name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"test",
            zipcode:"12345",
            followed:["Antonette","Samantha","Karianne"]
        },
        followedUser: []
    })
})
