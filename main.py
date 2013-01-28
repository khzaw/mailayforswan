import webapp2


class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.write('Oh Mai Lay, Wherefore art thou Mai Lay?!')

app = webapp2.WSGIApplication([('/', MainPage)], debug=True)
