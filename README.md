# rin
A personal URL shortener using GitHub Pages

## Demo

http://noraesae.github.io/rin/  
http://noraesae.github.io/rin/#gg  
http://noraesae.github.io/rin/#amz

Or my personal one,

http://rin.noraesae.net

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
If you'd like to use a custom domain, please don't forget to set the CNAME
of the domain to `username.github.io`. For the detail, please refer to [this
documentation](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/).

To build and publish, run following commands.

```bash
$ node build
$ open build/index.html # to check the built page
$ node publish
```

## License

The MIT License (MIT)
