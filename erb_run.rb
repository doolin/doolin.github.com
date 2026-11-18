#!/usr/bin/env ruby
# Quick and dirty template processing script. It takes
# as an argument the name of the first template script
# and then executes it to standard output.

require "herb"
require "herb/engine"



class QuickTemplate

   def problem_title
     "Problem space"
   end

   attr_reader :args, :text
   def initialize(file)
      @file = file
      @text = File.read(file)
   end
   def exec(args={})
      b = binding
      src = Herb::Engine.new(@text, filename: @file).src
      result = b.eval(src, @file)
      # Chomp the trailing newline
      result.gsub(/\n$/,'')
   end
end

def erb(file, args={})
   QuickTemplate.new(file).exec(args)
end

puts erb(ARGV.fetch(0)) if File.expand_path($PROGRAM_NAME) == File.expand_path(__FILE__)
