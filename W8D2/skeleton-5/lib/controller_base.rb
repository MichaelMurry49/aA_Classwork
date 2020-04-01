require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req
    @res = res
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    res.exists?
  end

  # Set the response status code and header
  def redirect_to(url)
    res.status = 302 
    res.location = path
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    res['Content-Type'] = content_type
    res.body = content
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    current_path = File.dirname(__FILE__)
    template_path = File.join(current_path, "..", "views", "#{template_name}.html.erb")
    content = File.read(template_path)
    result = ERB.new(content).result(binding)
    render_content(result, "text/html")
  end

  # method exposing a `Session` object
  def session

  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
  end
end

