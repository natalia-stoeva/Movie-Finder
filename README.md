# Movie-Finder
 
 ## Overwiew 
 Movie app using the MERN stack.
 ![M.F.D.B. home page](https://lh3.googleusercontent.com/9y1WXxTWT_rZ5MJ62RVS7F8dOKg-QtlZ6b0xmIFhDByWXj55dCfxYCnk8nlCTTYeHl4uzyQLRqRDVmVSgoe1alx4PDO25vWKkb5VR4fa0vCpAvpqGLDuJ_B-rDAWY5YfLrtbFHYPCqAnGztP_TKRwg3eDaxC1fQoFSFkODaZPAkaa41d48r4jrcL1KNDb8n1tJ4cek1Cl87R2Obv7UWS3Z9bxlta8VHvNYJwFSmmjHqD34Ti5nCHUWJALBPlAhai3kFbAWnZoYTgLn8qTe_fyU7QbQc49OKAFQA46gJwz-HDeMZ4BBixDqEwGSR8qMjduhWcOJqtxGLWKOTQgzDBIFlKr6poIb3KKRfWBu8epJ9IYmAL8CfuoPUkYoMcJzFJlC7e3WZPSKX0cMKubAllElMYWg1mCrV3_vq454WJoheRjodAAi7DhxBNzG1pB5DshtbzwdLLNPOMIKVhq9pmrGDAGZHbrHckPwz5-ogQ8CY94xacrO00WPARPL-YMIof5Lss9QVk3IOTmTDZdje6kP3cz5zw5xJNevcANgtkzHgbusC34alPabJdYCQ6t2FYg_wtPLyAqnjEfZqaOOqEsubuqpZhgaix1cAAg6G3SJJ-3hKGjar2GgqfxQ4snyzEg50XcpAJQsAi4bbYVRaLgWl62T8n-GJwoqdTxxCc1XCLKlPoJuE0dxHhRjFaRBZ1ze3VszQ8vthcfshWRl52Xos06CJkjrO_5LamtWv4LiqTH_D-F8wd5xGgGf-tQxuGHrhiE6O9H1nDF21O269Z5SxdpD1M5yzYVC-Rwm072pE0cEdLlub8fW6YBvEyIlUETIWZT_FUb8euA8ap4iBuUZPBz4kUdegYiYY5eZzDCxbXdvLp5txIlQkqFdvJ7Pii0TWVj5y82d92sKpZrOC_0EXSr01f06Tq3frHW_FdjRt4T25iCHWVSXH0SqPOpemXoRjIN3Q58RW8f-p_dw=w1602-h1053-no?authuser=0)
 
 ## Features
 
 ### Display trending movies and tv shows
 * The home page displays popular movies and tv shows provided by the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction). 
 * Users can click on a movie card and go to a page that displays more information about the clicked item.
 
 ### Search for movies, tv shows and people
 * Users can input a keyword in the search box. A request will be made to [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) and the response will be returned.
 * Search results will appear on the home page above the popular movies section. 
 
 ### User Authentication
 * User passwords are encrpyted using `bcrypt` before they are stored in the MongoDb Atlas database.
 
 
 ## Technologies
 Project is created with:
 * React version: 18.2.0
 * React Router version: 6.6.2
 * Express version: 4.18.2
 * Mongoose version: 6.8.3
 * Passport version: 0.6.0
 * Bcrypt: 5.1.0
 * Bootstrap version: 5.0.2
 * TMDBI API v3
 
 ## Instalation
* Navigate to the **main** folder.
* Install the dependencies by running `npm install`.
* Navigate to the **public** folder by using the `cd` command: *cd public*.
* Then, install the dependencies by running `npm install`.
* You can run both back-end and front-end servers by running the `npm start` command in each folder.
 

