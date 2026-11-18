#!/usr/bin/env ruby
# Renders an HTML+ERB template with Herb. Templates render partials
# with erb("path") and call the helpers defined on QuickTemplate.
# Run directly, it prints the template given as its argument.

require "herb"
require "herb/engine"

class QuickTemplate
  def initialize(file)
    @file = file
  end

  def problem_title
    "Problem space"
  end

  def render
    src = Herb::Engine.new(File.read(@file), filename: @file).src
    # Delete every empty line: each newline followed by another
    # newline or by the end of the output.
    binding.eval(src, @file).gsub(/\n$/, "")
  end
end

def erb(file)
  QuickTemplate.new(file).render
end

puts erb(ARGV.fetch(0)) if File.expand_path($PROGRAM_NAME) == File.expand_path(__FILE__)
