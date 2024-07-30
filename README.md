So my Virtual CV used Visual Studio code to write all my code. The coding languages I used were JavaScript and HTML. By downloading Node.js I was able to get to work quickly. For my website, I used Vite to give me a good foundation to start.
My website is divided into 6 sections. Each section consists of a .jsx file with the main code from that section. And then a CSS file for the visual formatting. Some of the more complex sections also have common. jsx functions just to help simplify the complexity of the code and not to get overwhelmed.
Hero
This is the first section where you can see my profile picture and change the website to light or dark mode. I coded this functionality by using a constant toggle theme function. This function imports react that is op Vite to create a context for themes and when you click the button the function will trigger to go to the previous theme. This allows the website to switch between light and dark mode.
In the CSS file where if did all the display formatting I made a container to hold all the info in this section. I made sure to always have the correct visual representation if you zoom in or out this will not affect the visual representation of the website
There are also three buttons. The first Will directly take you to my GitHub. The second will redirect you to my LinkedIn. The third will directly download my CV. My CV is on university standard since I asked a lecturer at the Medical School of the UFS to help me set up the CV. My website is also set up to my style.
Projects
In this section, you will see projects that I have worked on. A project Card function is there to ensure that the project image buttons run smoothly and reduce the workload of the website. The button is also formatted to fit with the device size. The image button consists of a link to the documentation of the git repository an image of the title and short descriptions of the project
Skills
This is more of the basic sections this section shows with skill I have and what I can do. Each skill consists of a tick mark icon and the skill. I also coded a line to divide the skill just to make it easier. In the code, I also made sure that the tick mark has a light and a dark mode to ensure consistency across the website.
Showcase
In this section, I showcase my hobbies. The issue I had was to let the photos keep with the size of the website, so my solution was to create a whole new container called container 2 in my CSS file. This code has a few steps to ensure it looks cool. Firstly, I created the flex display to ensure that the images wrap with the website and not against it. Then there is the image counterpart. This was implemented to ensure that consistency is kept throughout the whole sections with the images retaining their original size and not losing quality. this also doubles as an image resizer. (I think it is a very cool function to have.)
Contact
The contact section is my favorite section this I a contact card you can contact me directly. It works with direct implementation Formspree. This website is easily usable because there is not a lot of backend coding needed to implement it. It was as easy as to create a form action and group and just pasting the given HTML in your action function. The form also has validations for every input. All the box sizes are also adjustable to your liking. The color scheme also fits with the theme of the website.
Footer
The footer section is just there to show that this was my work and that I have full right over the website. It is easy to code with just a simple return function.
Other Files
The website has an asset library containing all of the assets I used to create it .
The background design was done in the app. jsx file by using HTML
Minor changes were also made to the package.json files and the index.html files this was just to ensure that the program ran smoothly with Vite and react.
Website Publishing
The publisher I used was Netlify.com. to publish the website you link your git repository to their website dashboard from there you make the necessary changes to ensure that the correct run command is given. From the dashboard, you can make changes to the website. When you publish there are a few phases that run firstly Initializing, Building, Deploying, Cleanup and Post-processing. This provider also updates when your repo gets s new push. So no need to worry about the website not being updated
Closing
This was a very fun project to start the semester off I think it was a good indication of what is to come for our group project.