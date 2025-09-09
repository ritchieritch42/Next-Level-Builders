# React/Vite SPA deployed via Netlify

This version of the site is built on a Vite foundation, using React for rendering and React Router for client-side page navigation.

The total payload is less than 300 KB, so no chunking or lazy-loading segmentation was necessary.

The folder containing the distributable content prepared for Netlify is not included in the repository, as it is ignored by Git. Running the Vite build command (npm run build) generates this production-ready version of the React/Vite SPA.

In the public folder, there is a netlify.toml configuration file that redirects all routes to index.html. Without this, Netlify would attempt to locate a physical file for each URL. Despite this redirection, the browser URL still reflects the route the user is visiting.
