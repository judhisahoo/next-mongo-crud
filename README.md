This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

https://www.youtube.com/watch?v=RKDfKbLJkZQ&list=PLcj1aOceG9D_4EhNJvzKt-bMvEEXbKNSj

.env.local

MONGO_URL = "mongodb+srv://judhisahoo:shJtv3Q3mRxIsyQA@judhisahoo-demo.y7sqnyv.mongodb.net/?retryWrites=true&w=majority&appName=judhisahoo-demo"

## steps to install package and coading

1. ### npx create-next-app next-mongo-crud-1

2) ### cd next-mongo-crud-1
   ==>> npm run dev to check the application is running or
3) now time to install tailwindcss so visit https://tailwindcss.com/
   visit 'documention' link and then left panel select "installation" then select "Framework Guides" then select "Next.js" tab.

follow the steps guide in tailwindcss web site.
like bellow command but remember day by day commands are change due to version are change.
https://tailwindcss.com/docs/installation/framework-guides/nextjs

### A) npm install tailwindcss @tailwindcss/postcss postcss autoprefixer

    B)  const config = {

            plugins: {
            "@tailwindcss/postcss": {},
            },
            };

        export default config;

            globals.css
            @import "tailwindcss";

            Terminal
            npm run dev

            ## page.tsx

            export default function Home() {
            return (

            <h1 className="text-3xl font-bold underline">
            Hello world!
            </h1>
            )
            }

4.  update some code in G:\E-Drive\next-js-g\next-mongo-crud-1\app\page.tsx 5) then time to install google font. visit bellow link and some step as guided bellow.
    ### https://fonts.google.com/specimen/Poppins
    click on "Get Fonts" button on right top corner of the screen.
    click on right side button "<> Get embed code" Button.
    From left panel un check all and only checked "regular 400" then from right panel select "web" tab and click on "@import" radio btton. then copy the import statement code and paste at top of the global.css file

### @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

then past the bellow code at first line where css code started.

_>_{
font-family: "Poppins", sans-serif;
}

5. now time to instal react icons for out applicatin. to install and how to use the raect icon for fute documentation visit the bellow link

### https://react-icons.github.io/react-icons/

use bellow command instal the icone package.

### npm install react-icons --save

////------------------------------------------------
now implement the icone in "pages.tsx" file with add employe as shown in video

### now create directory name "components" on root directory of app directoru

create file named "table.tsx" ==>> preparing tble heading and body structure ==>> follow youtube video for any doubt
create file named "form.tsx" ===>> preparing basic strcutire ==>> follow youtube video for any doubt
now import these in "pages.tsx" file.. ==>> follow youtube video for any doubt
now work complete work for FORM componet UI. and for collect data, implement useReducer React Hook and work for handleSubmit function ==>> follow youtube video for any doubt

now create another component "succeess.tsx" ==>> follow youtube video for any doubt(44:40)
now call the success component in "table.tsx" component ==>> follow youtube video for any doubt
Now create another component "bug.tsx" ==>> follow youtube video for any doubt

### now time for craete collapssable and dynamic form for "Add Employee" button click.. Here we also show dynamic for add employee and update employee.

now create two component(addUserForm.tsx and updateUserForm.tsx) and write code accordingly ==>> follow youtube video for any doubt

### Now time show fake data from JSON file.

create folder as "database at root of the project". create file as "data.json" put data as bellow structure.
[
{
"id": 1,
"name": "AAA",
"email": "first@f.com",
"salary": 5000,
"dob": "2025-01-01",
"status": "Active",
"avatar": "https://randomuser.me/api/portraits/men/1.jpg"
},
]
create 7 records like this.

now refactore "table.tsx" by adding new function for dynamic <tr>. call the data array from data.json
now call tr function in side table component's tbody area and with data.map to eter ==>> follow youtube video for more details
now you can view data in list page.

### insted of static file now time to use MongoDB for data storage.

follow youtube video create mongodb database in mongodb.com. collect connection string and store in a safe area.
Now create "conn.tsx" in "database" directory. and store connection string with a constant name "MONGO_URL".
update user password in the connection string collected from mongodb.com.

Now time to install mongoos driver to access mongodb from our application. use bellow command to install mongoose

# npm i -D mongoose --force

now complete the connection code conn.tsx file ==>> follow youtube video for any doubt

# now time to add more security and developer friendly.

create .env.local file at root of the project and move mongo connection string from conn.tsx to .env file ==>> follow youtube video for any doubt

# now time create controller for supply data to ui from DB.

Create "api" folder under app. then create "hello" folder inside "api". create "route.tsx" under "hello".
so structure like as bellow

# app -> api -> hello -> route.tsx

complete code for route.tsx ==>> follow youtube video for any doubt

# now you access http://localhost:3000/api/hello

# create all controller for user CRUD as bellow structure

# app -> api -> users -> route.tsx

above controller provide service like getall user data and create new user

# app -> api -> users -> [id] -> route.tsx

above controller provide service like. collect single data with id, update one record and delete one record

complete the code with following you tube video

# time to crete model

To handle data from mongodb to controller. by model we can provide collection schema information for the collection
create "model" folder under "app" folder. at crate user model as "userModel.tsx"

# app -> model -> userModel.tsx

complete the model code by following you tube video

### some part of you tube video like (1:22:00 to 1:44:15) are for knowldge but not work latter

# now time to collect data from mongodb and show in table list

move "table.tsx" implement controller to collect data from mongo db. ==>> follow youtube video for any doubt
for collect data from mongodb we need "fetch" function to collect data from remote data center.
create folder and file as bellow structure

# app -> lib -> helper.tsx

update code for helper.tsx for data access mongodb
now implement the "getUsers" from "helper.tsx" at "table.tsx" ==>> follow youtube video for any doubt
do some ui work for list data ==>> follow youtube video for any doubt

# now time to implement react query for better performanace of the applcation

# npm i react-query --force

now implement the useQuery hook. But we need create "client query provider".
Create "providers" directory and inside "provider" create file as "ReactQueryProvider.tsx" like

# app -> providers -> ReactQueryProviders.tsx

update the ReactQueryProviders.tsx file by following you tube video. now update some code "table.tsx" live status column color with proper UI/UX

Let completed code for all function "helper.tsx" file.

# now time for implement of Redux

now meed global access of data hide show form, data from component to componet. so let install Redux with bellow command
you get details about Redux from https://redux-toolkit.js.org/introduction/getting-started

# npm install @reduxjs/toolkit --force

# npm install react-redux --force

To implement Redux create new folder as "redux" under "app". create two file "store.tsx" and "reducer.tsx"

# app -> redux -> store.tsx

# app -> redux -> reducer.tsx

let complete code both file using you tube video
now complete the code for reducer and store as per you tube video.
let implement store in ReactQueryProvider as it is root file what will cover all application.

Let start implement reduct in the application.
open "table.tsx" file and start implement with useSelector and useDispatch Hook ==>> follow youtube video for any doubt
open "addUserForm.tsx" file and start implement with useClientQuery and useMutation Hook ==>> follow youtube video for any doubt

# Now time to open update form

Open open "pages.tsx" file and work on as per You tube video.
Now let paralal work on "form.tsx" and "table.tsx" to open update form toggle mode
