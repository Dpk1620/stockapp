# stockapp

This app is using frontend as React + Normal bootstrap Classes
Backend Packages -  Nodejs/Express/polygonApi/Axios/Moment

Frontend :
1. create Dashboard page and import into App.js for main Component.
2. Paste Bootstrap Link into html.js file for using bootstrap classes.
3. Call Axios api for get response from backend server.
4. Set data as sending for request.
5. UseState for manipulating state for local variables.

Backend :
1. use polygon api for getting response from server with the help of axios.
2. All setups are already done, I have just call the api and handle error with catch method.
3. post api call and get the request from frontend.
4. As per api req i have options for manipulating api.
5. response handle true async await and using catch method.


Note: Polygon Api have limit for unsubscribers and there is date limit mention is the api for getting data from specific date. 
      So as per the Docus I have set the fix date limit in project but everything is implemented for the knowing purpose.


Optional Task : 
Solution: As per Knowledge
1. We can use redis for our application. Redis db have multiple features for providing cashing for speed up and balance trafic for that.
ex:
     if a user hit a request and user get their response and after just a second 2nd user will hit the same request then it will hit again means
     the server will provide response same and at same process for multiple users app will take time and create multiple issues of speeding and unwanted response.
      Redis comes in the event and generate a key for specific time period along with the request and in redis db with using it on routing place and when user hit a response then  
      it will generate key and that key save in redis db and in that specific time zone if any other users hit the same response then redis will revert the same response as the 1st user got that time.
      Memory clear automaticaly as per specific time for keys.
      keys generate always unique so do not need to manage it.
      Gui Interface for handling trafic, handle app speed and save much bandwith.

2. we can provide multiple pages for specific datas that multiple users hit at same time and specific period of time trafic high. we can add eventlistner for pages to get activeness of 
users at specific page so we provide more bandwith compare to others. 
use pie charts and table format for showing data that will take small space and we can show much data on single page.
use nested routes / navigation for push the users for their exact data. 
all data have need more wrappind and calculation based so user get the data exactly rather then he have to calculate as per statics so user have more chance to revisit.
also SEO is important for getting multiple users traffic for easy search and availablity.
ex: I am a serching a website where i check the stocks update after check all the stock what comes in mind next calculation. so if i will calculate on that website as per stock movement history and calculation platform so i still stuck of website after the long process of calculation and then that redirect link from where i can get some of guide per implementing my knowledge (Investment). so a user stay for their time efficiency, speed up and heigh lighted context for imp titles, company Name, Specific up down ratio bars to show the exact way that particular stocks are high or low so i don;t have to revise on every list of data.      

