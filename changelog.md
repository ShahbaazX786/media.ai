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