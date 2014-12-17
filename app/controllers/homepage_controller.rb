class HomepageController < ApplicationController
  def home
    @posts = Post.all
  end
end
