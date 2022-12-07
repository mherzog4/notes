Github actions allows you to build ci pipelins for projects

GH responds to triggers & the action is executed(workflow) 

a workflow might have unit tests, linting, or deploying code to different envrioments


example GHA:

on: push
jobs:
    test:
        strategy:
            matrix:
                platform: [ubuntu-latest, macos-latest, windows-latest]
        runs on: ${{matrix.platform}}
        steps:
        - uses: actions/checkout@v1
        - uses: actions/setup-node@v1
        
        with:
            version: 12

        - run: npm install-ci-test
        -uses: 
        ...


        