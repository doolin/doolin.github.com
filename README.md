# code.daviddoolin.com

This static site renders `index.html.erb` and `_partials/` into the checked-in
`index.html`, then uses Jekyll to build and serve the site.

Use Ruby 4.0.7 (see `.ruby-version`) and Bundler 4.0.20:

```sh
gem install bundler -v 4.0.20
bundle install
```

Build the site into `_site/`:

```sh
bundle exec rake
```

Start the local preview at <http://127.0.0.1:4000>:

```sh
bundle exec rake code:server
```

The server compiles the ERB templates before starting. After editing an ERB
template, run `bundle exec rake code:compile` in another terminal; Jekyll will
pick up the updated HTML. CSS changes are picked up automatically.

Commit the regenerated `index.html` with template changes so the static page
stays current. Run `bundle exec rake code:clean` to remove Jekyll's generated
site and caches.
