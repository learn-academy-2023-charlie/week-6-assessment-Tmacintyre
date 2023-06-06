# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The line defines a controller class 'BlogPostsController' that inherits from the parent class 'ApplicationController'. The controller is where we handle the logic for requests and responses.
class BlogPostsController < ApplicationController
  def index
    # ---2) An instance variable is created that will allow us to retrieve all instances from the BlogPost database enabling us to produce a list of the posts. 
    @posts = BlogPost.all
  end

  # ---3) This line defines and creates the show route which will be used to be able to display only one instance of a database. Crud action would be read, and HTTP verb would be Get.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The line defines and creates the 'new' route which will be used to send an HTML form allowing a user to input data to create a new instance. Crud action: read, HTTP verb: Get
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The line creates/saves a new BlogPost instance using params established through our strong param 'blog_post_params'
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) The line allows us to to retrieve a specific instance in the database by id, and assigns it to our instance variable. This data will then be used to edit an existing blogpost when rendered. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) When a form is is submitted to update an instance, this line updates the attributes of the instance variable using the params obtained from our strong params method. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Once the destroy action is executed, this line redirects the user back to the index page where all instances are listed.
      redirect_to blog_posts_path
    end
  end

  # ---9) The line makes it so that every method created below it is private, stays hidden in the background and doesn't show, and that the methods below can only be accessed in the BlogPosts controller.
  private
  def blog_post_params
    # ---10) This is the setup for our strong params. This ensures that only the specific attributes 'title and content' are allowed to be passes as parameters so that unwanted params cannot modify our data.
    params.require(:blog_post).permit(:title, :content)
  end
end
