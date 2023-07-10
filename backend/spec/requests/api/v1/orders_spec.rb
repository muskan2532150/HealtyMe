require 'swagger_helper'

RSpec.describe 'Orders API', type: :request do

  path '/api/v1/users/{user_id}/user_profiles/{user_profile_id}/orders' do
    # You'll want to customize the parameter types...
    parameter name: 'user_id', in: :path, type: :string, description: 'user_id'
    parameter name: 'user_profile_id', in: :path, type: :string, description: 'user_profile_id'

    get('List Orders') do
      tags 'Orders'
      response(200, 'successful') do
        let(:user_id) { '123' }
        let(:user_profile_id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    post('Create Order') do
      tags 'Orders'
      response(200, 'successful') do
        let(:user_id) { '123' }
        let(:user_profile_id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end

  path '/api/v1/users/{user_id}/user_profiles/{user_profile_id}/orders/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'user_id', in: :path, type: :string, description: 'user_id'
    parameter name: 'user_profile_id', in: :path, type: :string, description: 'user_profile_id'
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('Show Order') do
      tags 'Orders'
      response(200, 'successful') do
        let(:user_id) { '123' }
        let(:user_profile_id) { '123' }
        let(:id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    put('Update Order') do
      tags 'Orders'
      response(200, 'successful') do
        let(:user_id) { '123' }
        let(:user_profile_id) { '123' }
        let(:id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    delete('Delete Order') do
      tags 'Orders'
      response(200, 'successful') do
        let(:user_id) { '123' }
        let(:user_profile_id) { '123' }
        let(:id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
