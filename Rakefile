require 'middleman-gh-pages'
require 'json'

namespace :assets do
  task :precompile do
    sh 'middleman build --verbose'
  end
end

desc "Publishes to github pages and publishs to bower version and publishs."
task :publish_to_bower do
  publish_to_bower
end

def publish_to_bower
  puts "Please enter a version number, previous version was #{bower["version"]}:"
  new_version = $stdin.gets
  puts "Compiling Sass files into CSS"
  `sass source/sass/all.css.scss`
  puts "Committing files to Git"
  `git add .`
  `git commit -m "Compiles and updates stylesheets in preperation for new version"`
  `bower version #{new_version}`
  puts "Pushing new tags to Github"
  `git push origin --tags`
  puts "Done!"
end

def bower
  JSON.load(File.new("bower.json"))
end
