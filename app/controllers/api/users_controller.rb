class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.band_name = @user.username

    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = current_user

    if @user.update_attributes(user_params)
      render 'api/users/show'
    else
      render json: ["Invalid user update parameters"], status: 401
    end
  end

  def index
    if params[:query]
      @users = User.where("LOWER(username) ~ LOWER(?)", params[:query])
      @albums = Album.where("LOWER(title) ~ LOWER(?)", params[:query])
    else
      @users = none
    end

    render :search
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
