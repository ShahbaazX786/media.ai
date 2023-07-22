CL-1.0.3: Completing Sidebar for both mobile and desktop.
- Added a new mobilesidebar component.
- Added sheet for mobilesidebar using command npx shadcn-ui@latest add sheet
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