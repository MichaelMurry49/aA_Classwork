require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content("Create User")
  end

  feature 'signing up a user' do
    before(:each) do
        visit new_user_url
        fill_in 'Username:', with: 'test1'
        fill_in 'Password:', with: 'password'
        
        click_on 'Create'
        # save_and_open_page
    end
    
    scenario 'shows username on the homepage after signup' do
        expect(page).to have_content('test1')
    end

  end
end

feature 'logging in' do
    before(:each) do
        visit new_session_url
        fill_in 'Username:', with: 'user'
        fill_in 'Password:', with: '123456'
        
        click_on 'Log In'
        # save_and_open_page
    end
    
    scenario 'shows username on the homepage after login' do
        # expect(page).to have_content('user')
    end

end

feature 'logging out' do
  scenario 'begins with a logged out state'

  scenario 'doesn\'t show username on the homepage after logout'

end