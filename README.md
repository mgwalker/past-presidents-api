# Past Presidents API

An API of stuff about past presidents.  Check it out: [https://presidents.darkcooger.net](https://presidents.darkcooger.net)

## Running

### Docker

If you have docker installed, you can get things running quickly and easily with just:

```
docker-compose up -d
```

Then browse to [https://localhost:8080](https://localhost:8080) to see it in action.  As you make changes to the code, you only need to restart:

```
docker-compose restart
```

However, if you `npm install` any new dependencies, you will need to rebuild the container.  This project is configured to have Docker cache the npm dependencies until `package.json` changes.  To rebuild, just do:

```
docker-compose up --build -d
```

### No Docker

This project uses Node.js and has an npm start script, so if you want to run it directly on your machine, you can do that with just:

```bash
npm install
npm start
```

On the downside, you'll need to make sure you're using the right version of Node (6.x as of this writing), and all the fun of maintaining multiple versions of Node if your other projects don't also want this version.

## License - ISC

**Copyright 2017**

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

---

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.