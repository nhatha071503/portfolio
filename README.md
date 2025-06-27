# portfolio

This project is a simple React portfolio scaffolded with Webpack. It now uses
**framer-motion** for smooth animations. Follow the steps below to start the
development server:

1. Install dependencies with `npm install`.
2. Start the dev server with `npm start`.

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

To create a production build, run `npm run build`.

## Configuring the contact form endpoint

Form submissions are sent to the endpoint defined in `src/config.js`.
Edit the `CONTACT_ENDPOINT` value in that file to point to your server:

```js
export default {
  CONTACT_ENDPOINT: 'https://example.com/api/contact'
};
```
