# AGENTS

Build, preview and Herb commands are in `README.md`.

## Branch, commit, push

- Commit directly on `master`; this repo uses no feature branches.
- Do not push. Pushing `master` publishes the site, and it is done by hand
  after an external hook has checked the commits.
- Each commit is atomic and minimal: one change, complete, and nothing else.
  An atom can be small (closing one tag) or big (one lint rule fixed across
  every template); its size follows the change, not a line count. A template
  change and its regenerated `index.html` belong to the same atom.

## Before each commit

1. `bundle exec rake` builds `_site/` and regenerates `index.html`.
2. `bundle exec rake code:verify` passes.
3. `bundle exec herb analyze .` reports every file clean.
4. `npx @herb-tools/linter@0.11.2` reports no new offenses.

## Changing what the site delivers

The delivered site is the contents of `_site/`. For a change meant to leave
the page as it is, copy `_site/` before the change and run `diff -r` against
the new build afterwards:

- no differences: the delivered site is unchanged;
- whitespace or blank lines only: confirm with
  `git diff -w --ignore-blank-lines index.html`;
- anything else changes the page, and the commit message says what and why.

Apply Herb lint autofixes one rule per commit (`--fix --only <rule>`), with the
rule's name in the message.
