
namespace :code do

  targetdir = "site"

  desc 'Delete generated _site files'
  task :clean do
    system "rm -fR _site *~"
  end
  
  desc 'Run the jekyll dev server'
  task :server do
    system "jekyll --server --auto"
  end
  
  desc 'Build the pages.'
  task :compile do
    system "./erb_run.rb index.html.erb > index.html"
  end

end



namespace :compass do  

  desc 'Delete temporary compass files'
  task :clean do
    system "rm -fR css/*"
  end

  desc 'Run the compass watch script'
  task :watch do
    system "compass watch"
  end

  desc 'Compile sass scripts'
  task :compile => [:clean] do
    system "compass compile"
  end
  
end
