# vue-crash-2025
# Vue Job Board

A simple job board application built with Vue 3, Vue Router, and Tailwind CSS. Users can browse, add, edit, and delete job listings.

## Features

- Home page with hero section and featured jobs
- List all jobs
- View job details
- Add new job postings
- Edit existing jobs
- Delete jobs
- Responsive design with Tailwind CSS
- Toast notifications for actions

## Project Structure

```
src/
  components/
    AppNavbar.vue
    AppHero.vue
    AppHomeCards.vue
    AppJobListing.vue
    BackButton.vue
  views/
    HomeView.vue
    JobsView.vue
    JobView.vue
    AddJobView.vue
    EditJobView.vue
    NotFoundView.vue
  router/
    index.js
  main.js
```

## Setup

1. **Install dependencies**

   ```
   npm install
   ```

2. **Run the development server**

   ```
   npm run dev
   ```

3. **API**

   - The app expects a REST API at `http://localhost:3001/jobs`.
   - You can use [json-server](https://github.com/typicode/json-server) for a quick mock API.

## Usage

- Visit `/` for the home page.
- Visit `/jobs` to see all jobs.
- Click on a job to view details.
- Use "Add Job" to create a new posting.
- Edit or delete jobs from the job detail page.

## Customization

- Update components in `src/components/` for UI changes.
- Modify views in `src/views/` for page logic.
- Adjust routes in `src/router/index.js`.

## License

MIT
