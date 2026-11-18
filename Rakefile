require_relative 'erb_run'

task default: 'code:build'

def rendered_index
  "#{erb('index.html.erb')}\n"
end

namespace :code do
  desc 'Delete generated Jekyll files'
  task :clean do
    sh 'bundle', 'exec', 'jekyll', 'clean'
  end

  desc 'Run the jekyll dev server'
  task server: :compile do
    sh 'bundle', 'exec', 'jekyll', 'serve'
  end

  desc 'Render the ERB templates to index.html'
  task :compile do
    File.write('index.html', rendered_index)
  end

  desc 'Fail if index.html is out of date with its templates'
  task :verify do
    next if File.read('index.html') == rendered_index

    abort 'index.html is out of date; run bundle exec rake code:compile'
  end

  desc 'Render the templates and build the site in _site'
  task build: :compile do
    sh 'bundle', 'exec', 'jekyll', 'build'
  end
end
