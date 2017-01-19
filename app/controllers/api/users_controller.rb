class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

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

  def index
    if params[:query]
      @users = User.where("username ~ ?", params[:query])
    else
      @users = none
    end

    respond_to do |format|
      format.html { render :search }
      format.json { render :search }
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
