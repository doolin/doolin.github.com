# code.daviddoolin.com

This static site renders `index.html.erb` and `_partials/` into the checked-in
`index.html`, then uses Jekyll to build and serve the site. GitHub Pages builds
`master` with its own Jekyll, so pushing `master` publishes the site.

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
stays current; `bundle exec rake code:verify` fails if it is out of date.
Run `bundle exec rake code:clean` to remove Jekyll's generated
site and caches.

## Templates and Herb

`erb_run.rb` compiles each template with [Herb](https://herb-tools.dev), which
parses the HTML as well as the ERB. A template with broken markup, such as an
unclosed tag, stops the build with its file, line and column. The renderer
also deletes every empty line from its output, so blank lines in a template
never reach `index.html`.

Check every template:

```sh
bundle exec herb analyze .
npx @herb-tools/linter@0.11.2
```

`analyze` parses and compiles each template. The linter needs Node.js; keep its
version equal to the `herb` gem's in `Gemfile.lock`. Fix one rule at a time
with `--fix --only <rule>`, and check `index.html` after each.

`.herb.yml` sets the framework and keeps Herb off the generated `index.html`
and `_site/`. The Herb formatter stays off: it is an experimental preview and
would rewrite every template.
