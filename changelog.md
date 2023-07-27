CL-1.5.1: postinstall script.
- Forgot to add postinstall script.

CL-1.5.0: Landing Page and Finishing touches.
- Added Landing page layout.
  - And it shall have navbar, hero, content(testimonials), and footer.
- Installed a package using command *npm i typewriter-effect* to use the typewriter effect on hero component.
- Fixed a bug where realtime count was not reflecting in sidebar.
- Fixed a bug in api-limit where getapilimit was not returning anything.
- Styling:
  - Fixed invisible close button styling appearing in  mobile sidebar by fixing sheet.tsx
  - Added some finishing touches in dashboard page.
  - Added New media.ai logo.
  - Added custom scrollbar styles in globals.css.
  - Added some finishing touches like pravatar links in testimonials.
  - Added Loading animation.

CL-1.4.5: Customer Support integration with CRISP.
- Created a crisp chat account with www.dummy.com as company name. And at last page copied the *Crisp_ID*
- Installed sdk for crisp chat using the command *npm i crisp-sdk-web*
- Added a crispchat.tsx component to configure the crisp using the env
- Added a crispChatProvider.tsx component add it in our layout file.
- Tried providing the id as env but it did not work quite, so just provided it as a string instead.

CL-1.4.0: Error Handling and Toast Notification.
- Installed a toast notification library using command *npm i react-hot-toast*
- Added a new ToasterProvider component and added it in app/layout.ts
- Updated the general console.log errors with toast.error.

CL-1.3.5: Settings Page
- Added settings/page.tsx page.
- Added a util function which shall return user subscription status.
- Created a custom subscription button which shall fetch subscription status and change its appearnce upon the status.
- Now after adding when I tried to test the button it gave me an error 'customer portal error' so go to the link in console log or go to customer portal page in stripe and enable testpoint/ add testpoint.
- Used isPro as props to ensure we do not show the upgrade and trial dialogs in PRO/subscribed user.
- Used isPro as another criteria in all 5 pages api routes. Also if the user is not pro then no need to run increaseAPIlimit function.

CL-1.3.0: Stripe Integration [complete flow]
- signed in stripe and copied secret key from there and pasted in .env file.
- installed stripe using *npm i stripe* command.
- Created stripe configuration file with 2 parameters.
- Updated schema.prisma file with userSubscription modal and later generated new schema using *npx prisma generate* command and then pushed the schema changes to cloud db using *npx prisma db push* command.
- Created a util function which returns absolute path.
- Created stripe/route.ts file to handle stripe page.
- Created a webhook/route.ts file to handle stripe events like checkout and cancel/updrage events.
- Installed stripe cli from stripe developers-->webhook-->test an endpoint-->follow 3 steps there.
- After downloading and extracting stripeCli.zip to stripeCli.exe copy its path and paste it into the system env variables in path field.
- Then run the first step command in cmd *stripe login*
  - Then login using your stripe account and allow access.
- Then go to second step where you run the stripe hostlistener using command *stripe listen --forward-to localhost:3000/api/webhook*
  - it will generate a webhook secret key upon running the above command.
  - copy and paste it into env file.
- Then finally run your app and test it up by checking if all events are 200 in your stripe listener cmd tab or not.
- As stripe is an external lib so we need to add /api/webhooks in our middleware for public urls so that it can be accessed without any errors.

CL-1.2.5.5: Small type error fix in sidebar.tsx.

CL-1.2.5: Adding a dialog modal whenever we click the upgrade button in freecounter component.
- installed a package called *zustand* using npm.
- Added hooks folder in root and created a custom setter method in it.
- Added a subscription dialog modal.
- Updated its styles.
- Added tools array to the modal.
- Provided apichecklimit to both mobilesidebar and sidebar so that they appear and be consistent in both small and bigger screens.
- Added proper error handling for 403 error in all 5 pages.

CL-1.2.0: Adding UI for API limit and subscription dialog modal.
- Added a FreeCounter component.
- Added a new method in api-limit.ts file to fetch currentApiLimit count from db.
- Used that freecounter component in sidebar to view the data.
- Installed a new component from shadcn using command *npx shadcn-ui@latest add progress*.
- updated primary color code in globals.css file.
- Added a new variant in shadcn button component.

CL-1.1.0: Setting up api limit using prisma.
- installed prisma using command *npm i prisma -D* as developer dependency.
- initialized prisma using command *npx prisma init*
- Headover to planetscale.com and sign in, then click on create and create a free tier 5gb database.
- after few minutes when the db is allocated, then click on connect to db --> click connection method as prisma from dropdown and then copy the dbstring and paste it into .env file.
- Now click on schema.prisma and copy its contents and paste it into our local schema.prisma.
- Then install a lib called prisma/client using command *npm i @prisma/client*
- Added a usermodel in schema.prisma file to map data into our database.
- Added a prismaclient initializer function in lib folder.
- Now run command *npx prisma generate* to generate some code in node_modules for prisma types. 
- Then finally run the command *npx prisma db push* to sync the local database with cloud db in planetscale.
> Note: Every time you make a change in schema.prisma file you need to run generate and push commands.
>Tip: To see your db run the command *npx prisma studio* which opens up a port on which you can go to via browser.
- Created constants file in root to hold the max free trials.
- Created util like middleware api-limit file for to check current userAPIlimit count and increaseApilimit Count value upon a sucessful api hit.
- Updated these api-limit methods in all 5 api routes.


CL-1.0.10.5: formatting.
- Minor bug fixes and code formatting.

CL-1.0.10: Added Video generation component with backend api as well.
- Copied and Updated the conversation dashboard & api folder to video folder and updated the propmts here and there.

CL-1.0.9: Added Music generation component with backend api as well.
- Added replicate token in env file.
- Copied and Updated the conversation dashboard & api folder to music folder and updated the propmts here and there. 

CL-1.0.8: Added Image generation component with backend api as well.
- Copied the conversation folder and renamed it to image and made some changes here and there.
- Updated api folder's route.ts file aswell for handling image prompt, amount and resolution.
- Updated parameters for image constants.
- Installed *select component* from shadcn.
- Updated next.config.js to avoid invalid src prop error for multiple images in our image component.

CL-1.0.7: Added code generation component with backend api as well.
- Copied the conversation folder and renamed it to code and made some changes here and there.
- Updated code page to include some style modifications/api change.
- installed *react-markdown* package to convert our response to markdown and view it in a better alignment.
- Updated api route logic to include a boot instruction which will make it behave like a code generator
- Fixed a small bgColor styling bug in respective pages of conversation and code generation. 

CL-1.0.6: Added Conversation component with backend api as well.
> Currently my 5$ credit is expired in openai so i can't use it no more to test conversation & code components.
- Updated .env file with new api keys as they have been pushed to github.
- Updated gitignore file to include .env file.
- Updated file layouts in correct folder locations.
- Added a userAvatar component to view user image if it exists or displays only firstname and lastname initials as avatar for request view.
- Added a botAvatar component to show the bot logo for response view.
- Added an Empty component to display a empty background image with some text when no conversation has been started.
- Added a standard empty chat png.
- Added a loader component to display it whenever we make an api call.
- Installed *avatar* image component from *shadcn* library.
- Installed *axios*, *openai* libraries.
- Added api routes for making post request to conversation api.

CL-1.0.5: Updating Dashboard component.
- Added conversation page UI.
- Installed shadcn form for handling form input via commands
  - *npx shadcn-ui@latest add form* for form handling
  - *npx shadcn-ui@latest add input* for input handling

CL-1.0.4: Updating Dashboard component.
- Fixed hydration error in mobilesidebar component.
- Used active selected css effect on sidebar option using ternary operator.
- Installed new shadcn card using command *npx shadcn-ui@latest add card*
- Added Dashboard page with fixed array of options.

CL-1.0.3: Completing Sidebar for both mobile and desktop.
- Added a new mobilesidebar component.
- Added sheet for mobilesidebar using command *npx shadcn-ui@latest add sheet*
 - This shall render the same sidebar component that we created for desktop dashboard page but upon button click and only in screens smaller than md.
 - we use sheet for rendering the component, sheettrigger for enabling the button, and sheetcontent to render whatever component we want to display in there. 

CL-1.0.2: Added Clerk Authentication & Sidebar,Navbar component.
- using command *npm install @clerk/nextjs*
- then create .env file and add publish/secret api keys in that.
- then wrap our app using clerkprovider in app/layout.tsx file.
- then secure the routes using middleware.ts file in root/middleware.ts
- then create your own sign-up and sign-in pages in your routes.
  - I have used page grouping feature of nextjs where (authentication)/signup/page.tsx ==> can be accessible using route localhost:3000/signup.
  - basically we can group two or more routes/pages using this grouping feature.
  - And as clerk is an 3rd party solution. so it may add some parameters to our routes.
    - ex:localhost/signup can be modified to localhost/signup/%abc/%defghi/etc/redirect=etc
    - so to enable this dynamic route params we shall provide "[[...signup]]" as the folder name which holds signup page.
  - Update .env file with post-authentication actions/routing.
  - Also embed a userButton for account management and logout purposes.
- Also installed shadcn buttons using npm.
- Added sidebar,navbar.
- Modified layout.tsx for dashboard, landing for centering the elements.

CL-1.0.1: Added shadcn ui
- using command npx shadcn-ui@latest init.
    - typescript - y
    - style - default
    - color - slate
    - global css file - app/globals.css
    - css colors - yes
    - tailwind loc - tailwind.config.js
    - import alias - @/components
    - alias for utils - @/lib/utils
    - finally y for saving all our shadcn config settings.
    - ultimately check if build is running or not using *npm start* command.

CL-1.0.0: Project initial commit
- renamed master to main branch
- pushed to remote github repo from local repo using commands
  - git remote add origin and repo link here
  - git push origin main -u(for default branch) -f(for using forced execution).