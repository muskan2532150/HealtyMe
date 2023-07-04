class Api::V1::UsersController < ApplicationController
    before_action :User_find, only: [:Update,:show,:destroy]

    def index
        @user = User.all
        @users = JSON.parse(UserSerializer.new(@users).serialized_json)
        @users[:status] = :ok
        render json: @users
    end

    def show
        render @user
    end

    def new
        @user = User.new
        @profile = @user.build_user_profile
    end

    def create
        @user = User.new(User_params)
        if @user.save
            render @user
        else
            render json: { errors: @user.errors }, status: :unprocessable_entity
        end
    end

    def update
        @user = @user.update(User_params)
        if @user.save
            render @user
        else
            render json: { errors: @user.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        if @user.destroy
            render @user
        end
    end

    private

    def User_find
        @user=User.find(params[:id])
    end

    def User_params
        require(:user).permit(:name,:email,:password,user_profile_attributes: [:phone_no,:profile_pic,:address])
    end

end
