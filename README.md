# rin
A personal URL shortener using GitHub Pages

## Demo

http://rin.noraesae.net  
http://rin.noraesae.net/#gg  
http://rin.noraesae.net/#amz

## How to use

Fork the repo, and clone it.

```bash
$ git clone git@github.com:username/rin.git
```

Modify [`config.json`](config.json) and [`urls.json`](urls.json).
An example `config.json` is like below.

```json
{
  "host": "rin.username.net",
  "repo": "git@github.com:username/rin"
}
```

The `host` field is optional if you don't want to use a custom domain.

To build and publish, run following commands.

```bash
$ node build
$ open build/index.html # to check the built page
$ node publish
```

## License

The MIT License (MIT)
