class InstagramController < ApplicationController
  	def index
  		@instagrams = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=2099333072.ab103e5.20cc166a3dde4d38a98f0e7826450a3c")

		@responses = @instagrams["data"]


		respond_to do |format|
			format.html {
				render
			}
			format.json {
				render json: @responses
			}
		end
  	end
end
