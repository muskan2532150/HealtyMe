class Api::V1::ProductsController < ApplicationController
    before_action :Product_find, only: [:Update,:show,:destroy]
   
    def index
        @product = Product.all
        @products = JSON.parse(ProductSerializer.new(@product).serialized_json)
        @products[:status] = :ok
        render json: @products
    end

    def show
        render @product
    end

    def create
        @product = Product.new(Product_params)
        if @product.save
            render @product
        else
            render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @product = @product.update(Product_params)
        if @product.save
            render @product
        else
            render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        if @product.destroy
            render @product
        else
            render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def Product_find
        @product=Product.find(params[:id])
    end

    def Product_params
        params.require(:product).permit(:name,:img,:price)
    end
end
