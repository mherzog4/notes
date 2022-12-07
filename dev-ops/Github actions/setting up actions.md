# example

name: Project CI
on:
    push:
        branches: [ main ]
    pull_request:
        branches: [ main ]
jobs: 
    build:
        runs-on: macos-latest
        steps:
            - uses: actions/checkout@v1
            - name: use Node.js version 16
             uses: actions/setup-node@v2
                with:
                    node-version: '16'
            - run: npm install
            - run: npm run build --prefix client
            
