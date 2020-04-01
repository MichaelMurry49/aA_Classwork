require 'rack'

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
#   res.write("Hello world!")
  pathfile = MyController.new(req, res)
  pathfile.execute 
  res.finish
end

Rack::Server.start(
  app: app,
  Port: 3000
)
