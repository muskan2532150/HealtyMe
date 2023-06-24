class Api::V1::UsersController < ApplicationController
    before_action :User_find, only: [:Update,:show,:destroy]

    def index
        @user = User.includes(:user_profile).all
        @users = JSON.parse(UserSerializer.new(@user).serialized_json)
        @users[:status] = :ok
        render json: @users
    end

    def show
        render json: @user
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render @user
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @user = @user.update(user_params)
        if @user.save
            render @user
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        if @user.destroy
            render @user
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def User_find
        @user=User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:name,:email,:password,user_profile_attributes: [:phone_no,:profile_pic,:address])
    end

end
