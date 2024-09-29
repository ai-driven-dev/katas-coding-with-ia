# Train Office Frontend Angular Exercise

This exercise focuses on implementing a frontend system for a train office using Angular. The main task is to create a user interface that interacts with the backend API to display and manage train bookings.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Proxy Configuration

To avoid CORS issues during development, set up a proxy configuration:

1. Create a file named `proxy.conf.json` in the project root:

    ```json
    {
      "/api": {
        "target": "<https://localhost:5000>",
        "secure": false
      }
    }
    ```

2. Update the `angular.json` file to use the proxy configuration:

    ```json
    "architect": {
      "serve": {
        "options": {
          "proxyConfig": "proxy.conf.json"
        }
      }
    }
    ```

## API Client Generation

To generate TypeScript clients for the backend API:

1. Install NSwag:

    ```sh
    npm install -g nswag
    ```

2. Add a script to `package.json` for generating the API client:

    ```json
    "scripts": {
      "generate-api-client": "nswag openapi2tsclient /input:../api/openapi.json /output:src/app/api/api-client.ts"
    }
    ```

3. Run the script to generate the API client:

    ```sh
    npm run generate-api-client
    ```
