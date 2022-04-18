# reac-testing-with-jest

Now that we have our first app we need to install and setup our jest env.

<h2>Conventions</h2>

- Jest will look for the _.test.js, _.test.tsx, pattern.

- You can create a file structure like this

```
├── tests
│ ├── **mocks**
│ │ └── mocker.js
│ ├── e2e
│ │ ├── **snapshots**
│ │ │ └── e2e.test.js.snap
│ │ ├── e2e.test.js
│ │ └── run.js
│ └── unit
│ ├── component.test.js
│ └── isolatedFunctio.test.js
```

Another important aspect is to have each test isolate from any noise; tests cannot rely on networks, file systems, and other tools that can fail in numerous aspects. And it’s here we are introduced to mocks. We use mocks to simulate URL requests, responses, file systems, etc.So we write functions to simulate all the environment where our code runs. Other essential Jest tools are beforeEach, afterAll(), and other functions that you can find [here](https://jestjs.io/docs/en/api#beforeeachfn-timeout).

So let’s create a file /components/Header/Header.test.tsx

`$ touch /components/Header/Header.test.tsx`
