class Api::V1::UserProfilesController < ApplicationController
    before_action User_profile_params

    def show
        render @profile
    end

    private

    def user_profile_find
        @user = User.find(params[:user_id])
        @profile = @user.user_profile
    end

    def User_profile_params
        require.(:user_profile).permit(:user_id,:phone_no,:profile_pic,:address)
    end
end
