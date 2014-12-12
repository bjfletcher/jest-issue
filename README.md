Run `jest` to see the issue:

```bash

$ jest
Using Jest CLI v0.2.1
 FAIL  __tests__/example-test.js (0.014s)
● e › it calls some function
  - TypeError: Object [object Object] has no method 'f'
        at Spec.<anonymous> (/Users/ben/projects/jest-issue/__tests__/example-test.js:8:11)
        at jasmine.Block.execute (/usr/local/lib/node_modules/jest-cli/vendor/jasmine/jasmine-1.3.0.js:1065:17)
        at jasmine.Queue.next_ (/usr/local/lib/node_modules/jest-cli/vendor/jasmine/jasmine-1.3.0.js:2098:31)
        at null._onTimeout (/usr/local/lib/node_modules/jest-cli/vendor/jasmine/jasmine-1.3.0.js:2088:18)
        at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)
1 test failed, 0 tests passed (1 total)
Run time: 0.299s
```
