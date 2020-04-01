require 'rack'
require_relative '../lib/controller_base'

class MyController < ControllerBase
  # def render_content(content, content_type="text/html")
  #   # @already_built_response
  #   res['Content-Type'] = content_type
  #   res.body = content
  #   @already_built_response = content

  # end

  # def render(template_name)
  #       current_path = File.dirname(__FILE__)
  #       template_path = File.join(current_path, "..", "views", "#{template_name}.html.erb")
  #       content = File.read(template_path)
  #       result = ERB.new(content).result(binding)
  #       render_content(result, "text/html")
  # end

  def go
    # render_content(req.path, "text/html")
    if req.path == "/cats"
      render_content("hello cats!", "text/html")
    else
      redirect_to("/cats")
    end
  end
end
app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  MyController.new(req, res).go
  res.finish
end

Rack::Server.start(
  app: app,
  Port: 3000
)

